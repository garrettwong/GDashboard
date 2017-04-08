class TableExamplesController {
  constructor() {
    this.name = 'tableExamples';

    this.columnHeaders = ['Name', 'Age', 'Registration Date', 'City'];

    this.dataset = [
      ['Garrett Wong', 17, '2017-04-13', 'Irvine'],
      ['Bryan Lim', 27, '2017-01-11', 'San Francisco'],
      ['Alan Ni', 27, '2017-07-11', 'San Francisco'],
      ['Edwin', 27, '2017-08-11', 'Cerritos']
    ];
  }

  addColumnHeader(columnHeader) {
    this.columnHeaders.push(columnHeader);
  }

  addDataRow(dataRowCsv) {
    let dataRow = dataRowCsv.split(',');
    
    this.dataset.push(dataRow);
  }
}

export default TableExamplesController;
