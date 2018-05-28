let MongoDbRepository = require('./mongoDbRepository.js');

// what does the person object look like
class Person {
    constructor(
        id,
        name,
        position,
        salary,
        office
    ) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.office = office;
    }
}

class PersonRepository {
    constructor() {
        // what properties do we need here
        this.repositoryName = 'Person';
        this.route = `/api/${this.repositoryName}`;
    }
    getAll(filter) {
        return this.MongoDbRepository.getAll(this.repositoryName).toArray();
    }
    getById(id) {

    }
    add(person) {
        return this.MongoDbRepository.add(this.repositoryName, person);
    }
    update(id, person) {

    }
    delete(id) {

    }
}

module.exports = new PersonRepository();

/* figure out how to read/write from mongo... figure out how to connect via api */