const Book = require('./book.js');
const Cat = require('./cat.js');
const Stock = require('./stock.js');

// testing
class MongooseApi {
    constructor() {

    }

    getCats() {

    }

    addCat(catObj) {
        const cat = new Cat(catObj); // { name: 'Jeremy Lin', age: 31, owner: 'Spurs' }
        cat.save().then(() => console.log('cat added'));
    }

    getBooks() {

    }

    addBook(bookObj) {
        const book = new Book(bookObj); // {title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'Mystery', description: 'A classic' }
        book.save().then(() => console.log('book added'));
    }

    getStocks(callback) {
        return Stock.getStocks(callback);
    }

    addStock(stockObj) {
        const stock = new Stock(stockObj);
        stock.save().then(() => console.log('stock added'));
    }
}

module.exports = new MongooseApi();