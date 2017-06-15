import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fruitsComponent from './fruits.component';

let fruitsModule = angular.module('fruits', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('fruits', {
      url: '/fruits',
      component: 'fruits'
    });
})

.component('fruits', fruitsComponent)

.name;

export default fruitsModule;
