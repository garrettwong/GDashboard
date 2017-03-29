import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './chartjsbar.html';

let chartjslineModule = angular.module('chartjsbar', [
  uiRouter
])

.directive('chartjsbar', function () {
    return {
        template,
        restrict: 'E',
        link: function (scope, element, attrs) {           
            console.log(element, $(element).css('width'), $(element).css('height'));

            scope.name = 'Votes per week';

            var ctx = document.getElementById("bartChartJs");
            ctx.width = parseInt($(element).css('width')); 
            ctx.height = parseInt($(element).css('height')) * 0.8; 

            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
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
                    }, {

                        type: 'line',  // override the default type
                        data: [2, 9, 3, 5, 2, 3],
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderWidth: 1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: false,
                  
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
            
        }
    };
})
// .directive('chartjsline', chartjslineComponent)

.name;

export default chartjslineModule;
