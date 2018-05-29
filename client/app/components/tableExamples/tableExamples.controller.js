class TableExamplesController {
  constructor(TableExamplesService) {
    this.name = 'tableExamples';
    this.tableExamplesService = TableExamplesService;

    this.columns = [];
    this.dataset = [];

    this.columnHeaderItem = '';
    this.datasetItem = {};

    this.tableExamplesService.getColumns().then((response) => {
      if (response.status === 200) {
        this.columns = response.data;

        this.tableExamplesService.getData().then((response) => {
          if (response.status === 200) {
            // also need to normalize data set to have the same columns as columns
            this.dataset = response.data.map((data, index) => {
              // console.log(this.columns);
              let obj = {};
              for(let key in this.columns) {
                //console.log(this.columns[key]);
                let dataFieldKey = this.columns[key]['data'];
                obj[dataFieldKey] = data[dataFieldKey];
                if (!obj[dataFieldKey]) {
                  obj[dataFieldKey] = '';
                }
              }
              return obj;
            });
          }    
        });
      }
    });

    // console.log('data validation', this.columns, this.dataset);
  }

  /*
   * @function _formatter
   * @desc - converts to camelCase and removes whitespace
   * @param val - value to be formatted
   * @returns formatted string
   */
  _formatter(val) {
    // Hello World, should be converted to helloWorld
    let newStr = val.replace(' ', '');

    return newStr.substr(0, 1).toLowerCase() + newStr.substr(1);
  }

  /*
   * @function addColumnHeader
   * @desc - adds a column header to the column set
   */
  addColumnHeader(columnHeader, type) {
    let newColumn = {
      title: columnHeader,
      data: this._formatter(columnHeader),
      type: type || 'text'
    };

    return this.tableExamplesService.addColumn(newColumn);
  }

  addDatasetItem(item) {
    return this.tableExamplesService.addData(item);
  }
}

export default TableExamplesController;
