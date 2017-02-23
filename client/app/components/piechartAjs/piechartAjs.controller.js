/*
 * @function PiechartAjsController
 * @description ads https://github.com/jtblin/angular-chart.js
 */
class PiechartAjsController {
  constructor($scope) {
    this.name = 'piechartAjs';

    $scope.$on('chart-create', (event, chart) => {
      console.log('chart!!!', event, chart);
      this.chart = chart;
    });

    
    this.labels = ['CEOs', 'Engineers', 'Janitors'];
    this.data = [300, 400, 177];
    this.options = {
      legend: {
        display: true,
        position: 'bottom'
      }
    };
    this.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

  }


  /*
   * @func update()
   * @desc updates the graph http://www.chartjs.org/docs/#bar-chart-example-usage
   */
  update() {
    console.log(this.chart);
    this.chart.data.datasets[0].data[1] = this.chart.data.datasets[0].data[1]*1.2;
    this.chart.data.datasets[0].data[2] = this.chart.data.datasets[0].data[2]*2; // Would update the first dataset's value of 'March' to be 50
    this.chart.update();
  }

  /*
   * @func destroy()
   * @desc http://www.chartjs.org/docs/#bar-chart-example-usage
   */
  destroy() {
    this.chart.destroy();
  }
}

export default PiechartAjsController;
