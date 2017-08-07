import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forcedirectedtreeComponent from './forcedirectedtree.component';

let forcedirectedtreeModule = angular.module('forcedirectedtree', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('forcedirectedtree', {
      url: '/forcedirectedtree',
      component: 'forcedirectedtree'
    });
})

.component('forcedirectedtree', forcedirectedtreeComponent)

.name;

export default forcedirectedtreeModule;
