// @file peopleRouter.js
// @description router for the People api
var express = require('express');
var MongoDbRepository = require('../repositories/mongoDbRepository');

// get an instance of router
var router = express.Router();

// route with parameters (http://localhost:8080/hello/:name)
router.get('/api/People', function(req, res) {
    let people = MongoDbRepository.get('People')
        .toArray(function(err, results) {
            res.json(results);
            
            people = results;
        });
});

router.post('/api/People', function(req, res) {
    console.log(req.body);

    let person = req.body;

    // throw error response if the req.body object is not well defined
    if (!person.name || !person.position || !person.salary|| !person.office) {
      res.json(500, { message: 'Invalid object ' });
      return;
    }

    MongoDbRepository.post('People', person, function(err, results) { 
        console.log('error', err);
        console.log('result', results);

        res.json(person);
    });
});

let columns = [{
  title: "Name",
  data: 'name',
  type: 'text',
},
{
  title: 'Position',
  data: 'position',
  type: 'select'
},
{
  title: 'Salary',
  data: 'salary',
  type: 'text'
},
{
  title: 'Office',
  data: 'office',
  type: 'radio'
}];

router.get('/api/DataTable/Columns/People', function(req, res) {
  console.log('DataTable/Columns/People');

  let people = MongoDbRepository.get('DataTable_Columns_People')
    .toArray(function(err, results) {
        res.json(results);
    });
});

router.post('/api/DataTable/Columns/People', function(req, res) {
  console.log('DataTable/Columns/People');
  console.log(req.body);

  let column = req.body;

  MongoDbRepository.post('DataTable_Columns_People', column, function(err, results) { 
    res.json(column);
  });
});

let people = [{
    "name": "James Wong",
    "position": "Software Engineer",
    "salary": "$255,000",
    "office": "Milbrae, CA"
  },
  {
    "name": "Hunter Lightbringer",
    "position": "Doctor",
    "salary": "$231,420",
    "office": "Manhattan, New York"
  },
  {
    "name": "Andre Kao",
    "position": "Business Analytst",
    "salary": "$109,220",
    "office": "San Diego, CA"
  },
  {
    "name": "Bryan Sung",
    "position": "Data Scientist",
    "salary": "$144,310",
    "office": "San Francisco, CA"
  },
  {
    "name": "Vincent Smith",
    "position": "Peace Corps",
    "salary": "$198,310",
    "office": "Johannesberg, South Africa"
  }];

module.exports = router;