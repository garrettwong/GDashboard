import angular from 'angular';

let JsonFileDatabaseFactory = function ($http) {
  let baseUrl = `http://localhost:3000`;
  let getAll = (apiName) => {
    let route = `${baseUrl}/api/${apiName}`;
  
    return $http.get(route);
  };

  let get = (apiName, id) => {
    let route = `${baseUrl}/api/${apiName}/${id}`;

    console.log(route);
    return $http.get(route);
  };

  let post = (apiName, data) => {

    let route = `${baseUrl}/api/${apiName}`;

    return $http.post(route, data);
  };
  
  let put = (apiName, id, data) => {

    let route = `${baseUrl}/api/${apiName}/${id}`;

    return $http.put(route, data);
  };

  let remove = (apiName, id) => {

    let route = `${baseUrl}/api/${apiName}/${id}`;

    return $http.delete(route);
  };

  let test = () => {
    console.log('testing completed');
  };
  
  return { getAll, get, post, put, remove, test };
};


let jsonFileDatabase = angular.module('JsonFileDatabase', [])

.factory('JsonFileDatabase', ['$http', JsonFileDatabaseFactory])
  
.name;

export default jsonFileDatabase;


