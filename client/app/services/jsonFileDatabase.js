/*
 * @class JsonFileDatabase
 * @description interface into the node.js express api
 */
export default class JsonFileDatabase {
  constructor($http) {
    this.$http = $http;
    this.baseUrl = `http://localhost:3001`;
  }

  static getClassName() { return 'JsonFileDatabase'; }
  getClassName() { return JsonFileDatabase.getClassName(); }

  getAll(apiName) {
    let route = `${this.baseUrl}/api/${apiName}`;

    return this.$http.get(route);
  };

  get(apiName, id) {
    let route = `${this.baseUrl}/api/${apiName}/${id}`;

    console.log(route);
    return this.$http.get(route);
  };

  post(apiName, data) {
    let route = `${this.baseUrl}/api/${apiName}`;

    return this.$http.post(route, data);
  };

  put(apiName, id, data) {
    let route = `${this.baseUrl}/api/${apiName}/${id}`;

    return this.$http.put(route, data);
  };

  remove(apiName, id) {
    let route = `${this.baseUrl}/api/${apiName}/${id}`;

    return this.$http.delete(route);
  };
}
