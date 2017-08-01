import angular from 'angular';
import uiRouter from 'angular-ui-router';

import tableExamplesService from './tableExamples.service';
import tableExamplesComponent from './tableExamples.component';

let tableExamplesModule = angular.module('tableExamples', [
  uiRouter
])

.config(routeConfig)

.service('TableExamplesService', tableExamplesService)

.component('tableExamples', tableExamplesComponent)

.name;

export default tableExamplesModule;

/** @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
      .state('tableExamples', {
        url: '/tableExamples',
        component: 'tableExamples',
        title: 'Table View',
        sidebarMeta: {
          order: 200,
        },
      });
}

