import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './chartjsbubble.html';

let chartjslineModule = angular.module('chartjsbubble', [
  uiRouter
])

/*
 * @directive chartjsline
 * @description http://www.chartjs.org/docs/#line-chart-introduction
 */
.directive('chartjsbubble', function () {
    return {
        scope: {
            bubbleData: '='
        },
        
        template,
        restrict: 'E',
        link: function (scope, element, attrs) {           
            console.log(element, $(element).css('width'), $(element).css('height'));

            scope.$watch('bubbleData', function(a, b) {
                console.log('bubbledata', a, b);
            });
            
            scope.name = 'Bubbles per week';

            var ctx = document.getElementById("bubbleChartJs");
            ctx.width = parseInt($(element).css('width')); 
            ctx.height = parseInt($(element).css('height')) * 0.8; 

            var myChart = new Chart(ctx, {
                type: 'bubble',

                data: {
                    datasets: [{
                        label: 'First Dataset',
                        data: [
                            {
                                x: 20,
                                y: 30,
                                r: 15
                            },
                            {
                                x: 40,
                                y: 10,
                                r: 10
                            }
                        ],

                        backgroundColor: "rgba(75,192,192,0.4)",
                        hoverBackgroundColor: "rgba(75,192,192,1)",
                    },
                    {
                        label: 'Sec Dataset',
                        data: [
                            {
                                x: 1,
                                y: 2,
                                r: 15
                            },
                            {
                                x: 3,
                                y: 1,
                                r: 10
                            }
                        ],
                        backgroundColor:"#FF6384",
                        hoverBackgroundColor: "#FF6384",
                    }]
                },

                options: {
                    elements: {
                        points: {
                            borderWidth: 1,
                            borderColor: 'rgb(0, 0, 0)'
                        }
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'rgb(255, 99, 132)'
                        }
                    }
                }
            });
            
        }
    };
})
// .directive('chartjsline', chartjslineComponent)

.name;

export default chartjslineModule;
