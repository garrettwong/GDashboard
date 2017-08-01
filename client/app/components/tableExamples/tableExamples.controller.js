class TableExamplesController {
  constructor(TableExamplesService) {
    this.name = 'tableExamples';

    console.log('TableExamplesController', TableExamplesService);
    
    this.columns = TableExamplesService.getColumns();
    this.dataset = TableExamplesService.getData();
    
    console.log('data validation', this.columns, this.dataset);
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
