import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sortableBarChartComponent from './sortableBarChart.component';

let sortableBarChartModule = angular.module('sortableBarChart', [
  uiRouter
])



.config(routeConfig)
.component('sortableBarChart', sortableBarChartComponent)

.name;



/** @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
      .state('sortablebarchart', {
        url: '/sortablebarchart',
        component: 'sortableBarChart',
        title: 'Sortable Bar Chart',
        sidebarMeta: {
          order: 200,
        },
      });
}

export default sortableBarChartModule;
