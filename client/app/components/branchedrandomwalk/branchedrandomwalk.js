import angular from 'angular';
import uiRouter from 'angular-ui-router';
import branchedrandomwalkComponent from './branchedrandomwalk.component';

let branchedrandomwalkModule = angular.module('branchedrandomwalk', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('branchedrandomwalk', {
      url: '/branchedrandomwalk',
      component: 'branchedrandomwalk'
    });
})

.component('branchedrandomwalk', branchedrandomwalkComponent)

.name;

export default branchedrandomwalkModule;
