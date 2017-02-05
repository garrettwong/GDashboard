import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listbulletsComponent from './listbullets.component';

let listbulletsModule = angular.module('listbullets', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('listbullets', {
      url: '/listbullets',
      component: 'listbullets'
    });
})

.component('listbullets', listbulletsComponent)

.name;

export default listbulletsModule;
