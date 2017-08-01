/*
 * @class TableExamplesService
 */
export default class TableExamplesService {
  constructor() { }

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
    this.data = [{
      "name": "Garrett Wong",
      "position": "Software Architect",
      "salary": "$117,200",
      "office": "Irvine, CA"
    },
    {
      "name": "Brian Wong",
      "position": "Doctor Architect",
      "salary": "$231,420",
      "office": "Memphis, TN"
    },
    {
      "name": "Eric Koo",
      "position": "Data Analytst",
      "salary": "$119,420",
      "office": "Berkeley, CA"
    },
    {
      "name": "Bryan Lim",
      "position": "Data Analytst",
      "salary": "$114,310",
      "office": "San Francisco, CA"
    },
    {
      "name": "Jinfull Jeng",
      "position": "Peace Corps",
      "salary": "$8,310",
      "office": "Republic of Comoros"
    }];

    return this.data;
  }
}