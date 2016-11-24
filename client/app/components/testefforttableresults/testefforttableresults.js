import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testefforttableresultsComponent from './testefforttableresults.component';

let testefforttableresultsModule = angular.module('testefforttableresults', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  
  $stateProvider
    .state('testefforttableresults', {
        url: "/testefforttableresults",
        component: 'testefforttableresults'
    });

})
.component('testefforttableresults', testefforttableresultsComponent)
.name;

export default testefforttableresultsModule;
