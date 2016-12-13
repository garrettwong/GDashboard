import angular from 'angular';
import uiRouter from 'angular-ui-router';
import salarygraphComponent from './salarygraph.component';
import uiSelect from 'ui-select';

import 'ui-select/dist/select.css';

let salarygraphModule = angular.module('salarygraph', [
  uiRouter,
  uiSelect
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('salarygraph', {
      url: '/salarygraph',
      component: 'salarygraph'
    });
})

.component('salarygraph', salarygraphComponent)

.name;

export default salarygraphModule;
