import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './chartjsline.html';

let chartjslineModule = angular.module('chartjsline', [
  uiRouter
])

/*
 * @directive chartjsline
 * @description http://www.chartjs.org/docs/#line-chart-introduction
 */
.directive('chartjsline', function () {
    return {
        template,
        restrict: 'E',
        link: function (scope, element, attrs) {           
            console.log(element, $(element).css('width'), $(element).css('height'));

            scope.name = 'Votes per week';

            var ctx = document.getElementById("lineChartJs");
            ctx.width = parseInt($(element).css('width')); 
            ctx.height = parseInt($(element).css('height')) * 0.8; 

            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "First dataset",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "rgba(75,192,192,0.4)",
                            borderColor: "rgba(75,192,192,1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,

                            data: [65, 59, 80, 81, 56, 55, 40],
                            // [
                            //     [65, 59, 80, 81, 56, 55, 40],
                            //     [35, 29, 40, 11, 76, 25, 45]
                            // ],
                            spanGaps: false,
                        },
                        {
                            label: "Second dataset",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(75,192,192,1)",
                            pointHoverBorderColor: "rgba(220,220,220,1)",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,

                            data: [165, 29, 15, 5, 256, 155, 70],
                            // [
                            //     [65, 59, 80, 81, 56, 55, 40],
                            //     [35, 29, 40, 11, 76, 25, 45]
                            // ],
                            spanGaps: false,
                        }
                    ]
                },
                
                options: {
                    maintainAspectRatio: false,
                    responsive: false,
                  
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                        
                        // xAxes: [{
                        //     type: 'linear',
                        //     position: 'bottom'
                        // }]
                    }
                }
            });
            
        }
    };
})
// .directive('chartjsline', chartjslineComponent)

.name;

export default chartjslineModule;
