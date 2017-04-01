import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tableComponent from './table.component';

let tableModule = angular.module('table', [
  uiRouter
])

.config(routeConfig)
.component('table', tableComponent)

.name;

export default tableModule;


/** @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
      .state('table', {
        url: '/table',
        component: 'table',
        title: 'Table View',
        sidebarMeta: {
          order: 200,
        },
      });
}