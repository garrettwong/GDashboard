import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bargraphComponent from './bargraph.component';

let bargraphModule = angular.module('bargraph', [
  uiRouter
])

.component('bargraph', bargraphComponent)

.name;

export default bargraphModule;
