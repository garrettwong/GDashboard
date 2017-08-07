import angular from 'angular';
import uiRouter from 'angular-ui-router';
import slideandzoomareagraphComponent from './slideandzoomareagraph.component';

let slideandzoomareagraphModule = angular.module('slideandzoomareagraph', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('slideandzoomareagraph', {
      url: '/slideandzoomareagraph',
      component: 'slideandzoomareagraph'
    });
})


.component('slideandzoomareagraph', slideandzoomareagraphComponent)

.name;

export default slideandzoomareagraphModule;
