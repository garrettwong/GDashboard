const Book = require('./book.js');
const Cat = require('./cat.js');

// testing
class MongooseApi {
    constructor() {

    }

    addCat(catObj) {
        const cat = new Cat(catObj); // { name: 'Jeremy Lin', age: 31, owner: 'Spurs' }
        cat.save().then(() => console.log('cat added'));
    }

    addBook(bookObj) {
        const book = new Book(bookObj); // {title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'Mystery', description: 'A classic' }
        book.save().then(() => console.log('book added'));
    }
}

module.exports = new MongooseApi();