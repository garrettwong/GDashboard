import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiSelect from 'ui-select';
import 'ui-select/dist/select.css';

import salarygraphComponent from './salarygraph.component';
import SalaryGraphService from './salarygraph.service';

let salarygraphModule = angular.module('salarygraph', [
  uiRouter,
  uiSelect
])
.service(SalaryGraphService.getClassName(), SalaryGraphService)

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
