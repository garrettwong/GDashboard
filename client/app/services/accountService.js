/*
 * @class AccountService
 * @description data service for login data
 */
import { sha256, sha224 } from 'js-sha256';

export default class AccountService {
    /* constructor & header files */
    constructor($http) {
        this.$http = $http;

        this.apiHost = 'http://localhost:3001/api';
    }
    static getClassName() {
        return 'AccountService';
    }
    getClassName() {
        return AccountService.getClassName();
    }

    /* methods */

    register(username, password) {
        let sha256Password = sha256(password);

        console.log(sha256Password);

        return this.$http.post(`${this.apiHost}/Account/Register`, { username: username, password: sha256Password });
    }

    login(username, password) {
        console.log(username, password);
    }
}