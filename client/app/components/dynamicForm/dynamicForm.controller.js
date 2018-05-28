class DynamicFormController {
  /*
  * @desc setup default data
  */
  constructor(SweetAlert) {
    this.sweetAlert = SweetAlert;

    this.datasetItem = { a: 1 };

    this.columns = this.columns || [];
    this.dataset = this.dataset || [];
  }

  /*
   * @function _formatter
   * @param val
   * @description - converts to camel case and also removes whitespace
   */
  _formatter(val) {
    let newStr = val.replace(' ', '');

    return newStr.substr(0, 1).toLowerCase() + newStr.substr(1);
  }

  /*
   * @function addColumnHeader
   * @param columnHeader
   * @param type
   * @description adds a new column header for datatable
   */
  addColumnHeader(columnHeader, type) {
    let newColumn = {
      title: columnHeader,
      data: this._formatter(columnHeader),
      type: type || 'text'
    };

    this.addColumnHeaderItemFunc(newColumn).then((response) => {
      console.log(response);
      
      this.columns.push(newColumn);
    });
  }

  /*
   * @function addData()
   * @description - adds a new row to the datatables array, dataset
   */
  addData() {
    console.log('addDataRow', this);

    this.addDatasetItemFunc(this.datasetItem).then((response) => {
      console.log(response);
      
      this.dataset.push(angular.copy(this.datasetItem));
    }, (error) => {
      this.sweetAlert.swal('Error: ', error.data.message, 'error');
    });
  }
}

export default DynamicFormController;
