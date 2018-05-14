/*
 * @class CryptoParser
 * @description parses crypto currency data returned from crypto service
 */
export default class CryptoParser {
    /* constructor & header files */
    constructor() {
        console.log('adsjfklsanfkldsnalfkdanslfa cryptoparser');
    }
    static getClassName() { 
        return 'CryptoParser'; 
    }
    getClassName() { 
        return CryptoParser.getClassName(); 
    }
    
    /* methods */

    /*
     * @function parseIntoArray_getCryptoCurrencyHoldingsCsv
     * @description parses the response data from the service call, getCryptoCurrencyHoldingsCsv
     *  response data expected to be in the format:
     *      {
     *          "data":"name,value\nVEN,2100\nBTC,900\nETH,1300\nDOGE,500\nFTC,250\nICX,200",
     *          "status":200,
     *          "config": {
     *              "method":"GET",
     *              "transformRequest":[null],
     *              "transformResponse":[null],
     *              "url":"cryptocurrency_holdings.csv",
     *              "headers":{"Accept":"application/json, text/plain, *"}
     *          },
     *          "statusText":"OK"
     *      }
     * @returns undefined
     */
    parseIntoArray_getCryptoCurrencyHoldingsCsv(response) {
        let arr = [];

        let tempCsvArr = response.data.split('\n');
        tempCsvArr.splice(0, 1); // get rid of csv headers
        for(var csvIndex in tempCsvArr) {
          var csvParts = tempCsvArr[csvIndex].split(',');
          
          arr.push({
            name: csvParts[0],
            value: parseInt(csvParts[1])
          });
        }

        return arr;
    }
}
