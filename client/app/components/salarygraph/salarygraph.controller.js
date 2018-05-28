/*
 * @class SalarygraphController
 * @description parses the ngaio2016.csv salaries data set
 */
class SalarygraphController {

  constructor($http, $timeout, $uibModal, $stateParams, TableExamplesService, SalaryGraphService, SalaryGraphParser, SalaryGraphDataConverter) {
    this.name = 'salarygraph';

    this.tableExamplesService = TableExamplesService;

    this.columns = [];
    this.dataset = [];
    
    this.tableExamplesService.getColumns().then((response) => {
      if (response.status === 200) {
        this.columns = response.data;
      }    
    });

    this.tableExamplesService.getData().then((response) => {
      if (response.status === 200) {
        this.dataset = response.data;
      }    
    });

    console.log('salarygraphcontroller', $stateParams.id, ' was passed');

    // assign reference parameters
    this.$http = $http;
    this.$timeout = $timeout;
    this.$uibModal = $uibModal;
    this._salaryGraphService = SalaryGraphService;
    this._salaryGraphParser = SalaryGraphParser;
    this._salaryGraphDataConverter = SalaryGraphDataConverter;

    this.keys = []; // track header names
    this.data = []; // track data fields
    this.selectedKey; // selected key

    // default graph data
    this.labels = [];
    this.graphData = SalaryGraphService.getDefaultGraphData();
    this.series = [];
    this.graphDataObjects = [];

    // side bar - graph view data
    this.listData = SalaryGraphService.getFilterListData();
    
    // initial call to kick off getting data
    this.httpGET_inputFile('./static/ngaio2016.tsv');
  }

  btnOpenSettingsModal() {
    let modalInstance = this.$uibModal.open({
        animation: true,
        component: 'salaryGraphSettingsComponent',
        
        // component "bindings"
        resolve: {
          items: () => {
            return this.listData;
          }
        }
      });

      // component return values
      modalInstance.result.then(function (selectedItem) {
        console.log(selectedItem);
        //model.selected = selectedItem;
      }, function () {
        
      });
  }

  /*
   * @function httpGET_inputFile
   * @description makes a HTTP GET call to a data input file
   * the callback handler processes the result set 
   */
  httpGET_inputFile(pathToDataFile) {
    this.$http.get(pathToDataFile).then((response) => {
      console.log(`result of ${pathToDataFile}`, response);

      let parsedResult = this._salaryGraphParser.parseData(response.data, 'tsv');
      console.log(parsedResult);

      // set controller values
      this.keys = parsedResult.headers;
      this.data = this._salaryGraphDataConverter
                        .arrayOfStringArraysToArrayOfObjectsBasedOnProperties(parsedResult.dataRows, parsedResult.headers);

      // set default selections
      this.selectedKey = [];
      this.selectedY = [];
    });
  }

  /*
   * @function onClickListElement
   * @description on click handler which updates the graph on screen
   */
  onClickListElement() {    
    this.$timeout(() => {
      console.log('calling updateGraph() with ', this.selectedListData);
      this.updateGraph(this.selectedListData.title);
    }, 0);
  }

  /*
   * @function sortBySelectedKey
   * @description simple sort utility to sort by the controller's selectedKey at index 0
   * @param a first object to compare
   * @param b second object to compare
   * returns -1 if a is less than b, 1 if a is greater than b and 0 if both are equal
   */
  sortBySelectedKey(a, b) {
    let x = this.selectedKey[0]; // get x key
    if (a[x] > b[x]) return 1;
    else if (a[x] < b[x]) return -1;
    else return 0;
  }

  /*
   * @function updateGraph
   * @description updates the graph on ui-select change.  the goal of this function is to update internal this parameters
   * which will be reflected on the user interface.  this.labels and this.graphData are the primary ones
   * @param filter 
   */
  updateGraph(filter) {
    console.log('Selected Y:', this.selectedY);
    console.log('data to format', this.data);
    console.log('sorting data by ', this.selectedKey[0]);

    this.data.sort((a,b) => this.sortBySelectedKey);

    // reset values
    this.resetGraph();

    // get the formatted graph data
    let formattedGraphData = this.getFormattedGraphData();

    // set values
    this.labels = formattedGraphData.labels;
    this.graphData = formattedGraphData.graphData;
    this.series = formattedGraphData.series;

    this.updateGraphDataByFilters(filter);
  }

  /*
   * @function resetGraph
   * @description resets the parameters which will reset the graph ui
   */
  resetGraph() {
    this.labels = [];
    this.graphData = [];
  }

  /*
   * @function getFormattedGraphData
   * @description formats and returns the graph data based on the selected x and y properties
   * @return an object containing the values for labels and graphData
      { 
        labels: ['label1', 'label2'],
        graphData: [
          [1, 2, 3],
          [2, 3, 4]
        ]
      }
   */
  getFormattedGraphData() {
    let labels = [];
    let graphData = [];
    let series = [];

    // the keyArr map will store the yProperty key name and contain arrays for each of these keys
    // { 'AnnualizedBaseSalary': [], 'Company Base': [] }
    let keyArr = {};

    // foreach parsed data object
    for (let j = 0; j < this.selectedY.length; j++) {
      let yProperty = this.selectedY[j];
      keyArr[yProperty] = [];
    }
  
    let arr = [];

    // get the x-axis and y-axis properties
    let xProperty = this.selectedKey[0];

    // iterate through the graph data array
    this.data.forEach((data, i) => {
      console.log('data element', data);

      // get selected index
      let labelVal = data[xProperty];

      // add labels
      labels.push(labelVal);

      // iterate and process yValues
      for (let j = 0; j < this.selectedY.length; j++) {
        let yProperty = this.selectedY[j];

        let valToInsert = 0;

        // if the data value is not null or undefined
        let dataVal = data[yProperty];

        if (dataVal) {
          valToInsert = parseInt(dataVal.replace('$', '').replace(',', ''));
          
          if (isNaN(valToInsert)) {
            valToInsert = dataVal;
          }
        }

        // add values (to multiple arrays)
        keyArr[yProperty].push(valToInsert);
      }
    });

    // add arrays to graphData as multiple entries
    for (let j = 0; j < this.selectedY.length; j++) {
      let yProperty = this.selectedY[j];
      
      if (keyArr[yProperty].length > 0) {
        graphData.push(keyArr[yProperty]);
        series.push(yProperty);
      }
    }

    return {
      labels,
      graphData,
      series
    };
  }


  /*
   * @function updateGraphDataByFilters
   * @description filters out data that doesn't meet the search condition
   * @param filter a string that is compared to the graphDataObjects[0].label property
   */
  updateGraphDataByFilters(filter) {
    // map graph data array of array ints to an array of objects based on the x-property
    // [{"label":"Quora","value":10416},{"label":"AT&T","value":3813}]
    // labels and graphData should be in-sync in terms of index positional value
    this.graphDataObjects = [];

    // graphData[0] is the first key used... we woud like to extend this to support all keys
    this.graphData[0].forEach((d, i) => {
      this.graphDataObjects.push({
        label: this.labels[i],
        value: d
      });
    });

    if (filter && filter !== '') {
      // apply filter
      this.graphDataObjects = this.graphDataObjects.filter((d) => {
        return d.label.toLowerCase() === filter.toLowerCase();
      });

      // update labels and graphData based on the graphDataObjects array which has been filtered
      this.labels = this.graphDataObjects.map((d) => {
        return d.label;
      });

      this.graphData = this.graphDataObjects.map((d) => {
        return d.value;
      });
    }
    
    console.log('post filtering', this.labels, this.graphData, this.graphDataObjects);
  }

  // cleans $100,000 the comma and the $
  cleanMoneyFormats(data) {
    return data.replace(/\"\$(\d+,*\d*,*)*\"/, )
  }
}

export default SalarygraphController;
