import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './chartjspie.html';

let chartjspieModule = angular.module('chartjspie', [
  uiRouter
])

/*
 * @directive <chartjspie></chartjspie>
 * @description http://www.chartjs.org/docs/#doughnut-pie-chart-introduction
 * 
 */
.directive('chartjspie', function () {
    return {
        template,
        restrict: 'E',
        scope: {
          test: '='
        },
        link: function (scope, element, attrs) {
            scope.name = 'Pie Chart Votes';
            
            // respond to changes in teh test var
            scope.$watch('test', function(newValue, oldValue, scope) {
              console.log ('test', newValue, oldValue, scope);
              
              this.initChart(scope, element, attrs, newValue);
            }.bind(this));
            
            this.initChart(scope, element, attrs);
        },

        // on update
        initChart: function (scope, element, attrs, data) {
          let dataArr = [];
          if (data === 'a') {
            dataArr = [12, 19, 3, 5, 2, 3];
          } else {
            dataArr = [33, 19, 35, 5, 2, 43];
          }

          if (this.myChart) {
            this.myChart.destroy();
          }

          var ctx = document.getElementById("pieChartJs");
          ctx.width = parseInt($(element).css('width')); 
          ctx.height = parseInt($(element).css('height')) * 0.8; 

          this.myChart = new Chart(ctx, {
              type: 'pie',
              data: {
                  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                  datasets: [{
                      label: '# of Votes',
                      data: dataArr,
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255,99,132,1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },

              options: {
                  maintainAspectRatio: false,
                  responsive: false,

                  // http://www.chartjs.org/docs/#chart-configuration-legend-configuration
                  legend: {
                      display: true,
                      labels: {
                          fontColor: 'rgb(255, 99, 132)'
                      }
                  },
                  
                  animation:{
                      animateScale:true
                  }
                  // scales: {
                  //     yAxes: [{
                  //         ticks: {
                  //             beginAtZero:true
                  //         }
                  //     }]
                  // }
              }
            });
        }
    };
})

.name;

export default chartjspieModule;
