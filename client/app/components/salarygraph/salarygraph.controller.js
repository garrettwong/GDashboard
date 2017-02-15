class SalarygraphController {

  constructor($http) {
    this.name = 'salarygraph';

    // this.carriageReturn = '\r\n';
    this.carriageReturn = '\n';

    this.keys = []; // track header names
    this.data = []; // track data fields
    this.selectedKey; // selected key

    this.labels = [];
    this.graphData = [
      [65, 59, 80, 81, 56, 55, 40]
    ];

    this.$http = $http;

    this.get();
  }


  /*
   * @function updateGraph()
   * @description updates the graph on ui-select change
   */
  updateGraph() {
    console.log('Selected Y:', this.selectedY);
    console.log('data to format', this.data);

    // sort data by the selectedKey
    console.log('sorting data by ', this.selectedKey[0]);

    this.data.sort((a, b) => {
      let x = this.selectedKey[0]; // get x key
      if (a[x] > b[x]) return 1;
      else if (a[x] < b[x]) return -1;
      else return 0;
    });

    // reset values
    this.labels = [];
    this.graphData = [];

    // foreach parsed data object
    for (let j = 0; j < this.selectedY.length; j++) {
      let arr = [];

      // xIndex will be a string denoting the x lookup 'key'
      let xProperty = this.selectedKey[0];
      // selectedIndex will be a string denoting the y lookup 'key'
      let yProperty = this.selectedY[j];

      console.log('looking up properties:', xProperty, yProperty, this.data[11][xProperty], this.data[11][yProperty]);

      // iterate through the graph data array
      this.data.forEach((data, i) => {
        // get selected index
        let labelVal = data[xProperty];
        let dataVal = data[yProperty];

        // if data is valid:
        if (dataVal) {
          let valToInsert = parseInt(dataVal.replace('$', '').replace(',', ''));
          
          if (isNaN(valToInsert)) {
            // if the val is inherently not a number
            //valToInsert = 0;
            valToInsert = dataVal;
          }

          // only push if valid value
          if (valToInsert !== 0 && valToInsert !== null) {
            // this.labels.push(i); // push index val
            this.labels.push(labelVal);

            arr.push(valToInsert);
          }
        }
      });

      // add to graphData
      if (arr.length > 0) {
        this.graphData.push(arr);
      }

      arr = [];
    }

    console.log('graphLabels', this.labels);
    console.log('graphData', this.graphData);
  }

  /*
   * @function get
   * @description gets values from the tsv
   */
  get() {
    this.$http.get('./static/ngaio2016.tsv').then((response) => {
      console.log('result of ngaio2016', response);

      let headersRow = this.parseCsvToHeaders(response.data);
      this.keys = headersRow;

      console.log(headersRow);

      let objectsArr = this.parseCsvToJsonArray(response.data, this.keys);
      this.data = objectsArr;

      console.log(this.data);

      // set default selections
      this.selectedKey = ['Company Name'];
      this.selectedY = [];

      // we can create a data array that looks like [[]]
    });
  }
  // cleans $100,000 the comma and the $
  cleanMoneyFormats(data) {
    return data.replace(/\"\$(\d+,*\d*,*)*\"/, )
  }

  parseCsvToHeaders(data) {
    let rows = data.split(this.carriageReturn);

    let headersRow = rows[0].split('\t');

    return headersRow;
  }

  parseCsvToJsonArray(data, headers) {
    let rows = data.split(this.carriageReturn);

    // now parse into objects
    let objectsArr = [];

    // start at row index 1 to skip the csv headers row
    for (let i = 1; i < rows.length; i++) {
      let curRow = rows[i].split('\t');
      //console.log(curRow.length, headers.length);

      let obj = {};


      for (let curPropIdx = 0; curPropIdx < curRow.length; curPropIdx++) {
        let headerKey = headers[curPropIdx];
        let val = curRow[curPropIdx];

        //console.log(headerKey, val);

        obj[headerKey] = val;
      }

      // console.log('obj', obj);
      objectsArr.push(obj);
    }

    return objectsArr;
  }
}

export default SalarygraphController;
