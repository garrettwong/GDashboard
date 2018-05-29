// @file peopleRouter.js
// @description router for the People api
var express = require('express');
let MongooseBase = require('../models/mongooseBase.js');

// get an instance of router
var router = express.Router();

router.get('/api/Stock', function(req, res) {
    MongooseBase.getStocks((response, data) => {
        res.json(data);
    });
});

router.post('/api/Stock', function(req, res) {
    console.log(req.body);

    let stock = req.body;

    // throw error response if the req.body object is not well defined
    if (!stock.title) {
      res.json(500, { message: 'Invalid object ' });
      return;
    }

    MongooseBase.addStock(stock);
});

module.exports = router;