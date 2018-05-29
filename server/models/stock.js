let Config = require('./config.js');
const mongoose = require('mongoose');
mongoose.connect(Config.mongoDbServerDatabase);

let model = {
    title: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    sales: {
        type: Number,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
};

let Stock = mongoose.model('Stock', model);

// Get stocks
Stock.getStocks = function(callback, limit) {
    Stock.find(callback).limit(limit);
};

// Add stock
Stock.addStock = function(stock, callback) {
    Stock.create(stock, callback);
};

module.exports = Stock;