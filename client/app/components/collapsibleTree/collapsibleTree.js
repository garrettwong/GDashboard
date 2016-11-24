import angular from 'angular';
import uiRouter from 'angular-ui-router';
import collapsibleTreeComponent from './collapsibleTree.component';

let collapsibleTreeModule = angular.module('collapsibleTree', [
  uiRouter
])



.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('collapsibletree', {
      url: '/collapsibletree',
      component: 'collapsibleTree'
    });
})

.component('collapsibleTree', collapsibleTreeComponent)

.name;

export default collapsibleTreeModule;
