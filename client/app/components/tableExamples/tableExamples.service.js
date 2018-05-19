/*
 * @class TableExamplesService
 */
export default class TableExamplesService {
  constructor($http) {
    this.$http = $http;
  }

  static getClassName() { return 'TableExamplesService'; }
  getClassName() { return TableExamplesService.getClassName(); }

  getColumns() {
    this.columns = [{
      title: "Name",
      data: 'name',
      type: 'text',
      cyber: {
        a: 'b', c: 'dee'
      }
    },
    {
      title: 'Position',
      data: 'position',
      type: 'select'
    },
    {
      title: 'Salary',
      data: 'salary',
      type: 'text'
    },
    {
      title: 'Office',
      data: 'office',
      type: 'radio'
    }];

    return this.columns;
  }

  getData() {
    console.log('hi HTTP', this.$http);

    // call the express js mongo API and get the data from the professionalPersons data source

    // 1. create express js API endpoint

    // 2. consume data and modify as a promise instead of data directly

    

    this.data = [{
      "name": "Garrett Wong",
      "position": "Software Architect",
      "salary": "$255,000",
      "office": "Irvine, CA"
    },
    {
      "name": "Brian Wong",
      "position": "Doctor Architect",
      "salary": "$231,420",
      "office": "Manhattan, New York"
    },
    {
      "name": "Eric Koo",
      "position": "Data Analytst",
      "salary": "$419,220",
      "office": "San Luis Obisbo, CA"
    },
    {
      "name": "Bryan Lim",
      "position": "Data Scientist",
      "salary": "$144,310",
      "office": "San Francisco, CA"
    },
    {
      "name": "Jinfull Jeng",
      "position": "Peace Corps",
      "salary": "$198,310",
      "office": "Johannesberg, South Africa"
    }];

    return this.data;
  }
}