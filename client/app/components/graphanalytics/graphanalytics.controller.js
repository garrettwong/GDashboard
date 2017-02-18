class GraphanalyticsController {
  constructor() {
    this.name = 'graphanalytics';



    console.log(this.graphData);
  }

  /*
   * @function refresh
   * @description finds the min and max of the current data set
   */
  refresh() {
    console.log(this.graphData);

    let min = Number.MAX_VALUE,
        minIndex = -1,
        max = Number.MIN_VALUE,
        maxIndex = -1;

    for (let dataSetIndex = 0; dataSetIndex < this.graphData.length; dataSetIndex++) {
      let curDataSet = this.graphData[dataSetIndex];

      for (let dataIndex = 0; dataIndex < curDataSet.length; dataIndex++) {
        if (curDataSet[dataIndex] > max) {
          max = curDataSet[dataIndex];
          maxIndex = dataIndex;
        }

        if (curDataSet[dataIndex] < min) {
          min = curDataSet[dataIndex];
          minIndex = dataIndex;
        }
      }
    }

    this.stats = {
      min: min,
      minIndex: minIndex,
      max: max,
      maxIndex: maxIndex
    };
  }
}

export default GraphanalyticsController;
