var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    errorhandler = require('errorhandler'),
    csrf = require('csurf');

let Calculator = require('./utilities/calculator.js');
let FileWriter = require('./utilities/fileWriter.js');
require('./utilities/arrayExtensions.js');



// let SpawnMongoProcess = require('./utilities/spawnMongoProcess.js');
let killProcessOnPort = require('./utilities/killProcessOnPort.js');

// === begin repositories and data access
let MongoDbRepository = require('./repositories/mongoDbRepository.js');

let MongooseBase = require('./models/mongooseBase.js');
MongooseBase.getStocks((response, data) => {
    console.log('surge')

    console.log(response, data);


});

//MongooseBase.addBook({ title: 'Green Eggs and Ham', author: 'Dr Suess', genre: 'Childrens' });
// MongooseBase.addBook({ title: 'The Giving Tree', author: 'Shel Silverstein', genre: 'Childrens' });
// MongooseBase.addBook({ title: 'Guardian\'s of the Galaxys', author: 'Stan Lee', genre: 'Comic' });
// === end repositories and data access

app = express();

//app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(session({
    secret: 'asdf',
    saveUninitialized: true,
    resave: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorhandler());

const port = 3001;

var fs = require("fs"),
    json;

//assume that config.json is in application root
var jsonDatabaseFile = 'database.json';
    json = getConfig(jsonDatabaseFile);

// cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});


// === start ROUTES 

// default GET /
app.get('/', function (req, res) {
    res.render('index.html');
});

// api
var baseUrl = '/api/';

let intrinsicRouter = require('./routes/intrinsicRouter.js');
let peopleRouter = require('./routes/peopleRouter.js');
let stockRouter = require('./routes/stockRouter2.js');
app.use('/', intrinsicRouter);
app.use('/', peopleRouter);
app.use('/', stockRouter);


// getAll() - http://localhost:3001/fruits
app.get(baseUrl + ':route', function (req, res) {
    var routeName = req.params.route;

    createRouteIfNotDef(json, routeName);

    console.log(json);

    res.json(json[routeName]);
});

// getById(id)
app.get(baseUrl + ':route/:id', function (req, res) {
    var routeName = req.params.route;
    var objectId = req.params.id;

    console.log(objectId, routeName);
    createRouteIfNotDef(json, routeName);

    console.log(json[routeName]);

    // get mongo

    let mongoResult = MongoDbRepository.get('test');
    console.log('mongo result', mongoResult);

    res.json(json[routeName].findById(objectId));
});

// post(obj)
app.post(baseUrl + ':route', function (req, res) {
    var routeName = req.params.route;
    var objectId = req.params.id;
    
    createRouteIfNotDef(json, routeName);

    if (req.body) {
        req.body.id = json[routeName].findMaxId() + 1;

        json[routeName].push(req.body);
        FileWriter.writeJsonFileAsync(jsonDatabaseFile, json);

        console.log('adding to some database ??? ' , json);
        MongoDbRepository.post('test', json);

        // MongoDbRepository.get('test') returns a cursor
        let res = MongoDbRepository.get('test');
        // console.log('Mongo result', res);
        res.forEach(function(doc, a) {
            // handle
            console.log('jin');
            console.log(doc);
            console.log(a);
          }, function(err) {
            // done or error
            console.log('error' , err);
          });
    }

    res.json(req.body);
});

// put(obj)
app.put(baseUrl + ':route/:id', function (req, res) {
    // prevent updating of ids

    var routeName = req.params.route;
    var objectId = req.params.id;

    createRouteIfNotDef(json, routeName);

    if (req.body) {
        var idx = json[routeName].findIndexById(objectId);

        if (idx === -1) {
            req.body.id = parseInt(objectId);
            json[routeName].push(req.body);
        } else {
            req.body.id = objectId; //sync with objectId just to ensure same object being updated
            json[routeName][idx] = req.body;
        }

        FileWriter.writeJsonFileAsync(jsonDatabaseFile, json);
    }

    res.json(req.body);
});

// delete(id)
app.delete(baseUrl + ':route/:id', function (req, res) {
    var routeName = req.params.route;
    var objectId = req.params.id;

    createRouteIfNotDef(json, routeName);

    if (req.body) {
        var idx = json[routeName].findIndexById(objectId);

        console.log('deleting', idx);

        if (idx > -1) {
            json[routeName].splice(idx, 1);
        }

        FileWriter.writeJsonFileAsync(jsonDatabaseFile, json);
    }

    res.json(req.body);
});


// customer examples
app.get(baseUrl + 'customers', function (req, res) {
    res.json(json);
});

app.get(baseUrl + 'customers/:id', function (req, res) {
    var ret = {};

    if (!json.customers) {
        json.customers = [];
        FileWriter.writeJsonFileAsync('config.json', json);
    }

    for (var i = 0; i < json.customers.length; i++) {
        if (json.customers[i].id === req.params.id) {
            res.json(json.customers[i]);
        }
    }

    res.json(ret);
});

app.post(baseUrl + 'customers', function (req, res) {
    if (!json.customers) {
        json.customers = [];
    }
    console.log(req.body);
    var customer = {
        name: req.body.name
    };

    json.customers.push(customer);

    FileWriter.writeJsonFileAsync('config.json', json);

    res.json(customer);
});

app.put(baseUrl + 'customers/:id', function (req, res) {
    console.log('*** customer');

    db.getCustomer(req.params.id, function (err, customer) {
        if (err) {
            console.log('*** customer err');
            res.json({
                customer: customer
            });
        } else {
            console.log('*** customer ok');
            res.json(customer);
        }
    });
});
app.delete(baseUrl + 'customers/:id', function (req, res) {
    console.log('*** customer');

    db.getCustomer(req.params.id, function (err, customer) {
        if (err) {
            console.log('*** customer err');
            res.json({
                customer: customer
            });
        } else {
            console.log('*** customer ok');
            res.json(customer);
        }
    });
});


// redirect all others to the index (HTML5 history)
app.get('*', function (req, res) {
    res.render('index');
});

// === end ROUTES 

app.listen(port, function () {
    console.log(`listening on ${port}`);
});

// Convert JSON file to a JSON object
function getConfig(file) {
    var filepath = __dirname + '/' + file;

    filepath = filepath.replace('server/', '/').replace('//', '/');

    console.log(filepath);

    let res;

    try {
        res = FileWriter.readJsonFileSync(filepath);
    } catch (exception) {
        // rewrite file
        console.log(__dirname + '/_databaseSeed.json');
        
        let json = FileWriter.readJsonFileSync(__dirname + '/_databaseSeed.json');

        FileWriter.writeJsonFileSync(filepath, json);
        
        res = FileWriter.readJsonFileSync(filepath);
    }

    return res;
}

function createRouteIfNotDef(json, routeName) {
    if (json[routeName] === undefined) {
        json[routeName] = [];
        FileWriter.writeJsonFileAsync(jsonDatabaseFile, json);
    }
}