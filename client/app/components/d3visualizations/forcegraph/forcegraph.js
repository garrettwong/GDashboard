import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiModal from 'angular-ui-bootstrap/src/modal';
import forcegraphComponent from './forcegraph.component';

let forcegraphModule = angular.module('forcegraph', [
  uiRouter,
  uiModal
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
