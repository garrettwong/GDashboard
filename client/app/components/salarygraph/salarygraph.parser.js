/*
 * @class SalaryGraphParser
 * @description parses the ngaio2016.csv salaries data set
 */
export default class SalaryGraphParser {
  constructor() {

  }

  static getClassName() { return 'SalaryGraphParser'; }
  getClassName() { return SalaryGraphParser.getClassName(); }

  /*
  * @function parseData
  * @description parses the actual data
  * @dataSet the input data
  * @dataFileFormat the format of the data('tsv', 'csv', 'json', 'xml')
  * @return a json object containing headers/data
  */
  parseData(dataSet, dataFileFormat) {
    //console.log('SalaryGraphParser data: ', dataSet, 'with format: ', dataFileFormat);

    let headers = this.parseHeaders(dataSet, dataFileFormat);
    let dataRows = this.parseDataRows(dataSet, dataFileFormat);

    // console.log('SalaryGraphParser headers: ', headers);
    // console.log('SalaryGraphParser header count: ', headers.length);
    // console.log('SalaryGraphParser dataRows: ', dataRows);
    // console.log('SalaryGraphParser dataRows count: ', dataRows.length);

    return {
      headers,
      dataRows
    };
  }

  /*
  * @function parseHeaders
  * @description helper function to extract the headers from the dataSet
  * @dataSet the input data
  * @dataFileFormat the format of the data('tsv', 'csv', 'json', 'xml')
  * @return a json array ['header1', 'header2', ...]
  */
  parseHeaders(dataSet, dataFileFormat) {
    let carriageReturnCharacter = '\n';
    let dataSeparatorCharacter = this.getDataSeparatorCharacter(dataFileFormat);

    let rows = dataSet.split(carriageReturnCharacter);
    let headersRow = rows[0].split(dataSeparatorCharacter);
    return headersRow;
  }

  

  /*
  * @function parseDataRows
  * @description helper function to extract the data rows from the dataSet
  * @dataSet the input data
  * @dataFileFormat the format of the data('tsv', 'csv', 'json', 'xml')
  * @return a json array ['header1_value', 'header2_value', ...]
  */
  parseDataRows(dataSet, dataFileFormat) {
    let carriageReturnCharacter = '\n';
    let dataSeparatorCharacter = this.getDataSeparatorCharacter(dataFileFormat);
    
    // create the rows of data
    let rows = dataSet.split(carriageReturnCharacter);

    // now parse into objects
    let valuesArr = [];

    // we start at index 1 (row 1), to skip the headers row
    for (let i = 1; i < rows.length; i++) {
      let curRow = rows[i].split(dataSeparatorCharacter);

      valuesArr.push(curRow);
    }

    return valuesArr;
  }


  /*
  * @function getDataSeparatorCharacter
  * @description helper function to get the dataSeparatorCharacter based on the dataFileFormat
  * @dataFileFormat the format of the data('tsv', 'csv', 'json', 'xml')
  * @return a character identifier to allow the parser to know what character to parse on ('\t', ',', ...)
  */
  getDataSeparatorCharacter(dataFileFormat) {
    let dataSeparatorCharacter;
    if (dataFileFormat === 'tsv') {
      dataSeparatorCharacter = '\t';
    } else if (dataFileFormat === 'csv') {
      dataSeparatorCharacter = ','; // csv
    } else {
      throw('dataFileFormat unsupported: tsv and csv are only supported for now');
    }
    return dataSeparatorCharacter;
  }

}
