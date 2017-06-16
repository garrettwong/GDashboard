import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fruitsComponent from './fruits.component';

import jsonFileDatabase from '../../../services/jsonFileDatabase';
import fruitsService from './fruits.service';
import fruitsModalComponent from './fruitsModal/fruitsModal.component';


let fruitsModule = angular.module('fruits', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('fruits', {
      url: '/fruits',
      component: 'fruits'
    });
})

.service(fruitsService.getClassName(), [jsonFileDatabase.getClassName(), fruitsService])

.component('fruitsModalComponent', fruitsModalComponent)

.component('fruits', fruitsComponent)

.name;

export default fruitsModule;
