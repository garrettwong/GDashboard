/* Example file of an included route */
var express = require('express');

// get an instance of router
var router = express.Router();

// route with parameters (http://localhost:8080/hello/:name)
router.get('/intrinsic/:name', function(req, res) {
    console.log('aloha ' + req.name);

    console.log(req.params.name);

    res.json('hello intrinsic' + req.params.name + '!');
});

module.exports = router;