import angular from 'angular';
import uiRouter from 'angular-ui-router';
import treemapComponent from './treemap.component';

let treemapModule = angular.module('treemap', [
  uiRouter
])

.config(routeConfig)
.component('treemap', treemapComponent)

.name;

export default treemapModule;


/** @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
      .state('treemap', {
        url: '/treemap',
        component: 'treemap',
        title: 'Tree Map',
        sidebarMeta: {
          order: 200,
        },
      });
}