const MongoClient = require('mongodb').MongoClient

class MongoDbRepository {
  constructor(dbAddress) {
    this.db = {};
    this.dbAddress = dbAddress;

    this.connect();
  }

  connect() {
    MongoClient.connect(this.dbAddress, (err, database) => {
      if (err) {
        console.log('connection error', err);  
        return;
      }
      console.log('listening via mongodb');
      this.db = database
    });
  }

  get(collection) {
    return this.db.collection(collection).find();
  }

  post(collection, data, cb) {
    return this.db.collection(collection).save(data, cb);
  }

  put(collection, curData, newData, cb) {
    this.db.collection(collection)
      .findOneAndUpdate(curData, {
        $set: newData
      }, {
        sort: { _id: -1 },
        upsert: true
      },
      cb);
  }

  delete(collection, name, cb) {
    this.db.collection(collection).findOneAndDelete({ name: name }, cb);
  }
}

module.exports = new MongoDbRepository('mongodb://localhost:27017');