import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiSelect from 'ui-select';
import 'ui-select/dist/select.css';

import stockTable from './stockTable/stockTable.component';
import salaryGraphSettingsComponent from './salaryGraphSettings/salaryGraphSettings.component';

import salarygraphComponent from './salarygraph.component';
import SalaryGraphService from './salarygraph.service';
import SalaryGraphParser from './salarygraph.parser';
import SalaryGraphDataConverter from './salarygraph.dataconverter';

let salarygraphModule = angular.module('salarygraph', [
  uiRouter,
  uiSelect
])
  .service(SalaryGraphService.getClassName(), SalaryGraphService)
  .service(SalaryGraphParser.getClassName(), SalaryGraphParser)
  .service(SalaryGraphDataConverter.getClassName(), SalaryGraphDataConverter)

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('salarygraph', {
        url: '/salarygraph',
        component: 'salarygraph'
      });

    //https://ui-router.github.io/guide/ng1/route-to-component
    $stateProvider
      .state('salarygraph.detail', {
        url: '/:id',
        component: 'salarygraph',
        resolve: {
          a: function ($transition$) {
            console.log($transition$.params().id, 'luv anus');
            return $transition$.params().id;
          }
        }
      });
  })

  .component('stockTable', stockTable)
  .component('salaryGraphSettingsComponent', salaryGraphSettingsComponent)
  .component('salarygraph', salarygraphComponent)

  .name;

export default salarygraphModule;
