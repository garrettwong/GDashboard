class SalarygraphController {
  
  constructor($http) {
    this.name = 'salarygraph';
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

  updateGraph(){
    console.log('Selected Y:', this.selectedY);

    // reset values
    this.labels = [];
    this.graphData = [];

    // foreach parsed data object
    for (let j = 0; j < this.selectedY.length; j++) {
      let arr = [];
      let selectedIndex = this.selectedY[j];
      this.data.forEach((data, i) => {
        // console.log('data', data[selectedIndex]);

        // get selected index
        let dataEl = data[selectedIndex];

        if (dataEl) { 
          let val = parseInt(dataEl.replace('$', '').replace(',', ''));
          if (isNaN(val)) val = 0;

          // only push if valid value
          if(val !== 0 && val !== null) {
            arr.push(val);
            
            this.labels.push(i); // push label position
          }
        }
      });
      this.graphData.push(arr);
      arr = [];
    }

    console.log(this.graphData);
  }

  get() {
    this.$http.get('./static/ngaio2016.csv').then((response) => {
      
      // response.data = cleanMoneyFormats(response.data);

      let headersRow = this.parseCsvToHeaders(response.data);
      this.keys = headersRow;

      let objectsArr = this.parseCsvToJsonArray(response.data, this.keys);
      this.data = objectsArr;

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
    let rows = data.split('\r\n');

    let headersRow = rows[0].split(',');

    return headersRow;
  }

  parseCsvToJsonArray(data, headers) {
    let rows = data.split('\r\n');

    // now parse into objects
    let objectsArr = [];

    // start at 1 because to skip the headers row
    for (let i = 1; i < rows.length; i++) {
      let curRow = rows[i].split(',');
      console.log(curRow.length, headers.length);

      let obj = {};

      for (let curPropIdx = 0; curPropIdx < curRow.length; curPropIdx++) {
        let val = curRow[curPropIdx];

        obj[headers[curPropIdx]] = val;
      }

      // console.log('obj', obj);
      objectsArr.push(obj);
    }

    return objectsArr;
  }
}

export default SalarygraphController;
