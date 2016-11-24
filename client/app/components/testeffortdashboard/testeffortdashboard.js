import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testeffortdashboardComponent from './testeffortdashboard.component';


let testeffortdashboardModule = angular.module('testeffortdashboard', [
  uiRouter
])

.component('testeffortdashboard', testeffortdashboardComponent)

.name;

export default testeffortdashboardModule;
