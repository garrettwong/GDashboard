/*
 * @class SalaryGraphDataConverter
 * @description converts the simple parsed result of the dataSet to alternate formats (string array to object, etc.)
 */
export default class SalaryGraphDataConverter {
  constructor() {

  }

  static getClassName() { return 'SalaryGraphDataConverter'; }
  getClassName() { return SalaryGraphDataConverter.getClassName(); }

  /*
  * @function stringArrayToKeyValueObjects
  * @description maps a string array 
  * @data a string array ['header1', 'header2']
  * @return a json array of key value pairs [{id: 1, value: 'header1', }, {id: 2, value: 'header2' }]
  */
  stringArrayToKeyValueObjects(data) {
    data.map((data, index) => {
      return {
        id: id+1,
        value: data
      };
    });
  }


  /*
  * @function arrayOfStringArraysToKeyValueObjects
  * @description maps an array of string arrays
  * @data a string array ['header1', 'header2']
  * @return a json array of key value pairs 
    [
      [{id: 1, value: 'header1', }, {id: 2, value: 'header2' }],
      [{id: 1, value: 'header1', }, {id: 2, value: 'header2' }]
    ]
  */
  arrayOfStringArraysToKeyValueObjects(data) {
    let newArr = [];
    for(let i = 0; i < data.length; i++) {
      newArr.push(this.stringArrayToKeyValueObjects(data[i]));
    }
    return newArr;
  }


  /*
  * @function stringArrayToKeyValuePairsArrayBasedOnIndexOfValueMap
  * @description maps a string array to an object, converting index associated positions to a key value pair 
    {
      key: 'header1',
      value: 'header_value1'
    }
  * @dataRows an array of string arrays [['header_value1', 'header_value2']]
  * @propertyMappingArr a string array ['header1', 'header2']
  * @return a json array of key value pairs 
    [{
      key: 'header1',
      value: 'header_value1'
    },{
      key: 'header2',
      value: 'header_value2'
    }]
  */
  arrayOfStringArraysToArrayOfObjectsBasedOnProperties(dataRows, propertyMappingArr) {
    let arrayOfObjects = [];
    
    for (let i = 0; i < dataRows.length; i++) {
      let currentRow = dataRows[i];

      // skip rows that do not have the same length
      if (propertyMappingArr.length !== currentRow.length) {
        continue;
      }

      let newObject = {};

      // rows will have the same length
      for (let j = 0; j < propertyMappingArr.length; j++) {
        let propertyKey = propertyMappingArr[j];
        let propertyValue = currentRow[j];

        newObject[propertyKey] = propertyValue;
      }
      
      arrayOfObjects.push(newObject);
    }

    return arrayOfObjects;
  }
}
