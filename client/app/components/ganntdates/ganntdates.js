import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ganntdatesComponent from './ganntdates.component';

let ganntdatesModule = angular.module('ganntdates', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('ganntdates', {
      url: '/ganntdates',
      component: 'ganntdates'
    });
})

.component('ganntdates', ganntdatesComponent)

.name;

export default ganntdatesModule;
