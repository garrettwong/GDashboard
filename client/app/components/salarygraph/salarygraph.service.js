/*
 * @class SalarygraphController
 * @description parses the ngaio2016.csv salaries data set
 */
export default class SalaryGraphService {
  constructor() {

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
    let data = [
      {
        title: 'Google',
        value: 2300,
        category: 'Tech',
        sales: 23,
        color: 'aero'
      },
      {
        title: 'Facebook',
        value: 59,
        category: 'Tech',
        sales: 11,
        color: 'green'
      },
      {
        title: 'Apple',
        value: 25,
        category: 'Tech',
        sales: 19,
        color: 'blue'
      },
      {
        title: 'Microsoft',
        value: 350,
        category: 'Tech',
        sales: 35,
        color: 'aero'
      },
      {
        title: 'Amazon',
        value: 470,
        category: 'Tech',
        sales: 47,
        color: 'blue'
      }
    ];

    return data;


  }
}