class TilesController {
  /*
   * @function constructor
   * @param tiles - array of tile objects { value, name, desc, icon }
   */
  constructor($http, CryptoService, CryptoParser) {
    // dependencies
    this.$http = $http;
    this.cryptoService = CryptoService;
    this.cryptoParser = CryptoParser;

    this.initializeDefaultTiles(); // remove this if no longer wanted

    this.initializeCrypto();
  }

  /* 
   * @function initializeCrypto
   * @description initial funtcion calls for crypto module
   */
  initializeCrypto() {
    this.cryptoHoldings = [];

    this.cryptoService.getCryptoCurrencyHoldingsCsv()
      .then((response) => {
        
        this.cryptoHoldings = [];

        this.cryptoHoldings = this.cryptoParser.parseIntoArray_getCryptoCurrencyHoldingsCsv(response);
        
        this.updateTiles();
      });
  }

  /* 
   * @function initializeDefaultTiles
   * @description default values on page load
   */
  initializeDefaultTiles() {
    if (!this.tiles) {
      this.tiles = this.setDefaultTiles();

      this.tileColumnClasses = this.getTileColumnClasses(this.tiles);
    }
  }

  /* 
   * @function setDefaultTiles
   * @description default tile values that are shown on initial load
   */
  setDefaultTiles() {
    return [
      {
        value: '14',
        name: 'Members in WS',
        desc: 'Number in Web Solutions',
        icon: 'fa-user'
      },
      {
        value: '78%',
        name: 'Reusability Score',
        desc: 'Measured by Estimated Release Date',
        icon: 'fa fa-star'
      },
      {
        value: '2.74/10.0',
        name: 'Feature Set',
        desc: 'Computed by the amount of reusable code',
        icon: 'fa-percent'
      }
    ];
  }

  /* 
   * @function getTileColumnClasses
   * @description default tile styles on initial load
   */
  getTileColumnClasses(tiles) {
    switch(tiles.length) {
      case 1:
        return 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
      case 2:
        return 'col-lg-6 col-md-6 col-sm-12 col-xs-12';
      case 3: 
        return 'col-lg-4 col-md-4 col-sm-12 col-xs-12';
      case 4:
        return 'col-lg-3 col-md-3 col-sm-6 col-xs-12';
    }
  }

  /* 
   * @function updateTiles
   * @description updates the crypto tiles view
   * @param tiles is expected to be an array of tile objects: [{value, name, desc, icon}]
   */
  updateTiles(tiles) {
    this.tiles = this.cryptoService.getCryptoTiles(this.cryptoHoldings);
  }
}

export default TilesController;
