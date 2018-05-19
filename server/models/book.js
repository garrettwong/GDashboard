const Config = require('./config.js');
const mongoose = require('mongoose');
mongoose.connect(Config.mongoDbServerDatabase);

let model = {
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
};

let Book = mongoose.model('Book', model);

// Get Books
Book.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
};

// Add Book
Book.addBook = function(book, callback) {
    Book.create(book, callback);
};

// Update Book
Book.updateBook = function(id, book, callback) {
    let query = { _id: id };
    let update = {
        name: book.name
    };
    Book.findOneAndUpdate(book, callback);
};

module.exports = Book;