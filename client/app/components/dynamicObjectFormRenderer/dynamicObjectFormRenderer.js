import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './dynamicObjectFormRenderer.html';

let dynamicFormRenderer = angular.module('dynamicFormRenderer', [
  uiRouter
])

/*
 * @directive <chartjspie></chartjspie>
 * @description http://www.chartjs.org/docs/#doughnut-pie-chart-introduction
 */
.directive('dynamicFormRenderer', function () {
    return {
        template,
        restrict: 'E',
        scope: {
          value: '=',
          rowToAdd: '='
        },
        link: function (scope, element, attrs) {
        
        },
    };
})

.name;

export default dynamicFormRenderer;
