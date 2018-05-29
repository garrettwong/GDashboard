/*
 * @class SalarygraphController
 * @description parses the ngaio2016.csv salaries data set
 */
export default class SalaryGraphService {
  constructor($http) {
    this.$http = $http;
  }

  static getClassName() { return 'SalaryGraphService'; }
  getClassName() { return SalaryGraphService.getClassName(); }

  getDefaultGraphData() {
    return [
      [65, 59, 80, 81, 56, 55, 40],
      [135, 159, 80, 31, 50, 55, 23]
    ];
  }

  getFilterListData() {
    return this.$http.get('http://localhost:3001/api/Stock');
  }
}

// class for seeding/test purposes only
class SalaryGraphSeedService {
  getFilterListData() {
    // return wrapped fake $http promise
    let data = [
      {
        title: 'Google',
        symbol: 'GOOG',
        value: 2300,
        category: 'Tech',
        sales: 23,
        color: 'aero',
        icon: 'fa-google'
      },
      {
        title: 'Facebook',
        symbol: 'FB',
        value: 59,
        category: 'Tech',
        sales: 11,
        color: 'blue',
        icon: 'fa-facebook'
      },
      {
        title: 'Apple',
        symbol: 'AAPL',
        value: 25,
        category: 'Tech',
        sales: 19,
        color: 'aero',
        icon: 'fa-apple'
      },
      {
        title: 'Microsoft',
        symbol: 'MSFT',
        value: 350,
        category: 'Tech',
        sales: 35,
        color: 'aero',
        icon: 'fa-windows'
      },
      {
        title: 'Amazon',
        symbol: 'AMZN',
        value: 470,
        category: 'Tech',
        sales: 47,
        color: 'blue',
        icon: 'fa-amazon'
      }
    ];

    return data;
  }
}