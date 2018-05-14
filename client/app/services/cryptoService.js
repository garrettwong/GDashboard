/*
 * @class CryptoService
 * @description data service for crypto data
 */
export default class CryptoService {
    /* constructor & header files */
    constructor($http) {
        this.$http = $http;
        
        // constants
        this._cryptoCurrencyHoldingsCsvPath = 'cryptocurrency_holdings.csv';
    }
    static getClassName() {
        return 'CrytpoService';
    }
    getClassName() {
        return CrytpoService.getClassName();
    }

    /* methods */

    /*
     * @function getCryptoCurrencyHoldingsCsv
     * @description references a local file, cryptocurrency_holdings.csv
     * @returns a promise to the data
     */
    getCryptoCurrencyHoldingsCsv() {
        return this.$http.get(this._cryptoCurrencyHoldingsCsvPath);
    }

    /*
     * @function getCryptoTiles
     * @description references a local file, cryptocurrency_holdings.csv
     * @returns a promise to the data
     */
    getCryptoTiles(cryptoHoldingsArr) {
        return [
            {
                value: cryptoHoldingsArr.length,
                name: 'Crypto Holdings',
                desc: 'Unique Coins',
                icon: 'fa-money'
            },
            {
                value: this.findMaxValue(cryptoHoldingsArr),
                name: 'Highest Crypto Value',
                desc: 'Highest Value Holding',
                icon: 'fa-car'
            },
            {
                value: this.findMinValue(cryptoHoldingsArr),
                name: 'Lowest Crypto Value',
                desc: 'Lowest Value Holding',
                icon: 'fa-user'
            }
        ];
    }

    /* 
     * @function findMaxValue
     * @description computes the maximum value in an array of objects with property, value (number)
     */
    findMaxValue(arr) {
        var max = 0;
        var maxCoin = '';

        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i].value) {
                max = arr[i].value;
                maxCoin = arr[i].name;
            }
        }
        return this.formattedValueWithCoin(max, maxCoin);
    }

    /* 
     * @function findMinValue
     * @description computes the maximum value in an array of objects with property, value (number)
     */
    findMinValue(arr) {
        var min = Number.MAX_VALUE;
        var minCoin = '';

        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i].value) {
                min = arr[i].value;
                minCoin = arr[i].name;
            }
        }
        return this.formattedValueWithCoin(min, minCoin);
    }

    /* 
     * @function formattedValueWithCoin
     * @description returns the formatted value with coin text
     */
    formattedValueWithCoin(value, coinName) {
        return `$${value} (${coinName})`;
    }
}