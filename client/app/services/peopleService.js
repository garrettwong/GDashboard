/*
 * @class PeopleService
 * @description data service for people data
 */
export default class PeopleService {
    /* constructor & header files */
    constructor($http) {
        this.$http = $http;

        this.apiHost = 'http://localhost:3001/api';
    }
    static getClassName() {
        return 'PeopleService';
    }
    getClassName() {
        return PeopleService.getClassName();
    }

    /* methods */

    /*
     * @function getCryptoCurrencyHoldingsCsv
     * @description references a local file, cryptocurrency_holdings.csv
     * @returns a promise to the data
     */
    getAll() {
        return this.$http.get(`${this.apiHost}/People`);
    }

    addPerson(person) {
        return this.$http.post(`${this.apiHost}/People`, person);
    }

    updatePerson(person) {
        return this.$http.put(`${this.apiHost}/People/${person.id}`, person);
    }
}