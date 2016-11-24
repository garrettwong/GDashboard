import angular from 'angular';
import uiRouter from 'angular-ui-router';
import speechComponent from './speech.component';

let speechModule = angular.module('speech', [
  uiRouter
])

.component('speech', speechComponent)

.name;

export default speechModule;
