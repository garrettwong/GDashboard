var express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    errorhandler = require('errorhandler'),
    csrf = require('csurf');

require('./utilities/arrayExtensions.js');

let MongoDbRepository = require('../utilities/mongoDbRepository.js');

// what does the person object look like
class Person {
    constructor(
        id,
        name,
        position,
        salary,
        office
    ) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.office = office;
    }
}

class PersonRepository {
    constructor() {
        // what properties do we need here
        this.route = '/api/Person';
    }
    getAll() {
        
    }
    getById(id) {

    }
    add(person) {

    }
    update(id, person) {

    }
    delete(id) {

    }
}

module.exports = new PersonRepository();

/* figure out how to read/write from mongo... figure out how to connect via api */

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

        MongoDbRepository.post('test', json);

        // MongoDbRepository.get('test') returns a cursor
        let res = MongoDbRepository.get('test');
        console.log('Mongo result', res);
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

