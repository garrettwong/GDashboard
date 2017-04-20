import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import template from './dynamicFormRenderer.html';
import './dynamicFormRenderer.styl';

let dynamicFormRenderer = angular.module('dynamicFormRenderer', [
  uiRouter,
  ngAnimate
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
          rowToAdd: '=',
          props: '=',
          addData: '&'
        },
        link: function (scope, element, attrs) {
            console.log('props', scope.props);

            if (!scope.props) scope.props = {};

            if (typeof(scope.props) !== undefined) {
                //this.markObject(scope.props);
            }
            
            scope.btnAddData = function() {
                scope.addData();
            };
        },
        
        markObject: function(obj) {
            // if the property is an object, we want to
            if (obj === undefined || obj === null) return;
            
            console.log('error', obj);
            let keys = Object.keys(obj);

            for(var key in keys) {
                // mark current property
                if (typeof(obj[key] === 'object')) {
                    if (obj[key] instanceof Array) {
                        obj[key].internalType = 'array';
                    } else if (obj[key] instanceof Object) {
                        obj[key].internalType = 'object';
                    }

                    //this.markObject(obj[key]);
                    obj[key].keys = Object.keys(obj[key]);
                }
            }
        }
    };
})

.name;

export default dynamicFormRenderer;
