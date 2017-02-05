import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardgridComponent from './dashboardgrid.component';

let dashboardgridModule = angular.module('dashboardgrid', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('dashboardgrid', {
      url: '/dashboardgrid',
      component: 'dashboardgrid'
    });
})

.component('dashboardgrid', dashboardgridComponent)

.name;

export default dashboardgridModule;
