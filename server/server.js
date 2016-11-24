var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    errorhandler = require('errorhandler'),
    csrf = require('csurf');
app = express();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'pug');
app.use(session({
    secret: 'asdf',
    saveUninitialized: true,
    resave: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorhandler());

const port = 3000;

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


// get
app.get('/', function (req, res) {
    res.render('index.html');
});

// api
var baseUrl = '/api/';

// getAll()
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
        writeJsonFileAsync(jsonDatabaseFile, json);
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

        writeJsonFileAsync(jsonDatabaseFile, json);
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

        writeJsonFileAsync(jsonDatabaseFile, json);
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
        writeJsonFileAsync('config.json', json);
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

    writeJsonFileAsync('config.json', json);

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

app.listen(port, function () {
    console.log(`listening on ${port}`);
});



// helper functions
function readJsonFileSync(filepath, encoding) {
    if (typeof (encoding) == 'undefined') {
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function writeJsonFileAsync(filepath, json) {
    console.log(filepath);
    fs.writeFile(filepath, JSON.stringify(json), function (err) {
        if (err) return console.log(err);
    });
}

function getConfig(file) {
    var filepath = __dirname + '/' + file;

    filepath = filepath.replace('server/', '/');

    console.log(filepath);
    return readJsonFileSync(filepath);
}

function createRouteIfNotDef(json, routeName) {
    if (json[routeName] === undefined) {
        json[routeName] = [];
        writeJsonFileAsync(jsonDatabaseFile, json);
    }
}
Array.prototype.findById = function (id) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].id == id) {
            return this[i];
        }
    }
    return null;
};
Array.prototype.findIndexById = function (id) {
    for (var i = 0; i < this.length; i++) {
        console.log(this[i].id + ' vs ' + id)
        if (this[i].id == id) {
            return i;
        }
    }
    return -1;
};
Array.prototype.findMaxId = function () {
    var maxId = 1;
    for (var i = 0; i < this.length; i++) {
        maxId = maxId > this[i].id ? maxId : this[i].id;
    }
    return parseInt(maxId);
};