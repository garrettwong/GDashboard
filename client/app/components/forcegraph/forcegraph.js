import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forcegraphComponent from './forcegraph.component';

let forcegraphModule = angular.module('forcegraph', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('forcegraph', {
      url: '/forcegraph',
      component: 'forcegraph'
    });
})

.component('forcegraph', forcegraphComponent)

.name;

export default forcegraphModule;
