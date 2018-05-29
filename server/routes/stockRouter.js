// @file peopleRouter.js
// @description router for the People api
var express = require('express');
var MongoDbRepository = require('../repositories/mongoDbRepository');

// get an instance of router
var router = express.Router();

// route with parameters (http://localhost:8080/hello/:name)
router.get('/api/Stock', function(req, res) {
    let stocks = MongoDbRepository.get('stocks')
        .toArray(function(err, results) {
            res.json(results);
            
            stocks = results;
        });
});

router.post('/api/Stock', function(req, res) {
    console.log(req.body);

    let stock = req.body;

    // throw error response if the req.body object is not well defined
    if (!stock.name || !stock.position || !stock.salary|| !stock.office) {
      res.json(500, { message: 'Invalid object ' });
      return;
    }

    MongoDbRepository.post('stocks', stock, function(err, results) { 
        console.log('error', err);
        console.log('result', results);

        res.json(stock);
    });
});

module.exports = router;