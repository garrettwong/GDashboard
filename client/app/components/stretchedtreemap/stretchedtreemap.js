import angular from 'angular';
import uiRouter from 'angular-ui-router';
import stretchedtreemapComponent from './stretchedtreemap.component';

let stretchedtreemapModule = angular.module('stretchedtreemap', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('stretchedtreemap', {
      url: '/stretchedtreemap',
      component: 'stretchedtreemap'
    });
})
.component('stretchedtreemap', stretchedtreemapComponent)

.name;

export default stretchedtreemapModule;
