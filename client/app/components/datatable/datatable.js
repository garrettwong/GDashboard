import angular from 'angular';
import uiRouter from 'angular-ui-router';
import datatableComponent from './datatable.component';

let datatableModule = angular.module('datatable', [
  uiRouter
])
.config(routeConfig)
.component('datatable', datatableComponent)

.name;

export default datatableModule;

/** @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
      .state('datatable', {
        url: '/datatable',
        component: 'datatable',
        title: 'Table View',
        sidebarMeta: {
          order: 200,
        },
      });
}