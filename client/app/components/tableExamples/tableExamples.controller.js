class TableExamplesController {
  constructor() {
    this.name = 'tableExamples';

    this.columns = [
      {
        title: "Name",
        data: 'name',
        type: 'text',
        cyber: {
          a: 'b', c: 'dee'
        }
      },
      {
        title: 'Positioned',
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
      }
    ];

    this.dataset = [{
        "name": "Garrett Wong",
        "position": "System Architect",
        "salary": "$120,800",
        "office": "Irvine"
      },

      {
        "name": "Brian Wong",
        "position": "Doctor Architect",
        "salary": "$231,420",
        "office": "Memphis"
      },
    ];
  }

  /*
   * @function _formatter
   * @param val
   * @description - converts to camel case and also removes whitespace
   */
  _formatter(val) {
    // Hello World, should be converted to helloWorld
    let newStr = val.replace(' ', '');

    return newStr.substr(0, 1).toLowerCase() + newStr.substr(1);
  }

  addColumnHeader(columnHeader, type) {
    let newColumn = {
      title: columnHeader,
      data: this._formatter(columnHeader),
      type: type || 'text'
    };
    this.columns.push(newColumn);
  }

  addDataRow() {
    console.log(this.dataRowToAdd);

    this.dataset.push( this.dataRowToAdd );
  }
}

export default TableExamplesController;
