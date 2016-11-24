import angular from 'angular';
import uiRouter from 'angular-ui-router';
import divtableComponent from './divtable.component';

let divtableModule = angular.module('divtable', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('divtable', {
      url: '/divtable',
      component: 'divtable'
    });
})

.component('divtable', divtableComponent)

.name;

export default divtableModule;
