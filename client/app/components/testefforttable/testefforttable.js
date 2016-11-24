import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testefforttableComponent from './testefforttable.component';
import $ from 'jquery';
import moment from 'moment/moment.js';
import 'moment/min/locales.min';

let testefforttableModule = angular.module('testefforttable', [
  uiRouter
])
.filter('mmddyyyy', function() {
  return function(dateStr) {
    return moment(dateStr).format('MM/DD/YYYY');
  };
})
.directive('scrolly', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var raw = element[0];
            console.log('loading directive');
            
            // let's find all other divs with a .scroll-child class on them
            element.bind('scroll', function () {
                console.log('in scroll');
                console.log(raw.scrollLeft);

                var elements = document.getElementsByClassName("scrollpartner");
                console.log('partners', elements);
                
                console.log(elements.length);
                for (var i = 0; i < elements.length; i++) {
                  var element = elements[i];
                  console.log('set scroll left:', raw.scrollLeft, element.scrollLeft);
                  
                  $(element).scrollLeft(raw.scrollLeft);

                  console.log($(element).scrollLeft());
                }
                scope.$apply();

                if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
                    scope.$apply(attrs.scrolly);
                }
            });
        }
    };
})
.config(($stateProvider) => {
  "ngInject";
  
  // dashboard
  $stateProvider
    .state('testEffortDashboard', 
    { 
      name: 'testEffortDashboard', 
      url: '/TestEffortDashboard', 
      component: 'testeffortdashboard',
      resolve: {
        testEffortDashboard: function($http) {
          return $http.get('./testdata.json', { cache: true }).then(function(response) {
            return response.data;
          });
        },

        testEffort: function(testEffortDashboard, $stateParams) {
          console.log(testEffortDashboard, $stateParams);

          return testEffortDashboard.find(function(testEffort) {
            return testEffort.index === parseInt($stateParams.testEffortId);
          });
        }
      }
    });
  $stateProvider
    .state('testEffortDashboard.testEffortDashboardResult', {
      url: '/{testEffortId}',
      component: 'testeffortdashboard',
      resolve: {
        testEffort: function(testEffortDashboard, $stateParams) {
          console.log(testEffortDashboard, $stateParams);

          return testEffortDashboard.find(function(testEffort) {
            console.log(testEffort);

            return testEffort.index === $stateParams.testEffortId;
          });
        }
      }
  });
  
  // edit table
  $stateProvider
    .state('testEffortTable', 
    { 
      name: 'testEffortTable', 
      url: '/testefforttable', 
      component: 'testefforttableresults',
      resolve: {
        testEffortTable: function($http) {
          return $http.get('./testdata.json', { cache: true }).then(function(response) {
            return response.data;
          });
        },

        testEffort: function(testEffortTable, $stateParams) {
          console.log(testEffortTable, $stateParams);

          return testEffortTable.find(function(testEffort) {
            return testEffort.index === parseInt($stateParams.testEffortId);
          });
        }
      }
    });
    
  $stateProvider
    .state('testEffortTable.testefforttableresults', {
      url: '/{testEffortId}',
      component: 'testefforttableresults',
      resolve: {
        testEffort: function(testEffortTable, $stateParams) {
          console.log(testEffortTable, $stateParams);

          return testEffortTable.find(function(testEffort) {
            console.log(testEffort);

            return testEffort.index === $stateParams.testEffortId;
          });
        }
      }
  });
})
.component('testefforttable', testefforttableComponent)

.name;

export default testefforttableModule;
