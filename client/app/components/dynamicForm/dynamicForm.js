import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dynamicFormComponent from './dynamicForm.component';

let dynamicFormModule = angular.module('dynamicForm', [
  uiRouter
])
.filter('typeof', function() {
  return function(obj) {
    return typeof obj
  };
})
.config(routeConfig)
.component('dynamicForm', dynamicFormComponent)

.name;

export default dynamicFormModule;

/** @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
      .state('dynamicform', {
        url: '/dynamicform',
        component: 'dynamicForm',
        title: 'Table View',
        sidebarMeta: {
          order: 200,
        },
      });
}