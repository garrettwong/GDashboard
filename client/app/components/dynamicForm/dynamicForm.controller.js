class DynamicFormController {
  constructor() {

    this.dataRowToAdd = {a:1};

    this.columns = this.columns || [
      {
        title: "Name",
        data: 'name',
        type: 'text'
      },
      {
        title: 'Position',
        data: 'position',
        type: 'select'
      }
    ];

    this.dataset = this.dataset || [{
        "name": "Garrett Wong",
        "position": "System Architect"
      },

      {
        "name": "Brian Wong",
        "position": "Doctor Architect"
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

  // addData() {
  //   alert('wait');

  //   console.log('addDataRow', this.dataRowToAdd);

  //   this.dataset.push( this.dataRowToAdd );
  // }
  addData() {
    console.log('addDataRow', this);

    this.dataset.push( angular.copy(this.dataRowToAdd) );
  }
}

export default DynamicFormController;
