/*
 * @class TableExamplesService
 */
export default class TableExamplesService {
  constructor($http) {
    this.$http = $http;
  }

  static getClassName() { return 'TableExamplesService'; }
  getClassName() { return TableExamplesService.getClassName(); }

  /*
   * @func getColumns
   * @desc getes a list of columns representing the dataset that 
   * allows data tables to map the array of data to the table
   */
  getColumns() {
    return this.$http.get('http://localhost:3001/api/DataTable/Columns/People');
  }

  /*
   * @func addColumn
   * @desc adds a col
   * allows data tables to map the array of data to the table
   */
  addColumn(item) {
    return this.$http.post('http://localhost:3001/api/DataTable/Columns/People', item);
  }

  /*
   * @func getData
   * @desc gets a list of items from the api
   */
  getData() {
    return this.$http.get('http://localhost:3001/api/People');
  }

  /*
   * @func addData
   * @desc adds an item to the api
   * @param item
   */
  addData(item) {
    return this.$http.post('http://localhost:3001/api/People', item);
  }
}