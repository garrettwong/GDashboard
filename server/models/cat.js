let Config = require('./config.js');
const mongoose = require('mongoose');
mongoose.connect(Config.mongoDbServerDatabase);

let model = {
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    owner: {
        type: String,
        required: false
    },
};

let Cat = mongoose.model('Cat', model);

// Get Cats
Cat.getCats = function(callback, limit) {
    Cat.find(callback).limit(limit);
};

// Add Cat
Cat.addCat = function(cat, callback) {
    Cat.create(cat, callback);
};

module.exports = Cat;