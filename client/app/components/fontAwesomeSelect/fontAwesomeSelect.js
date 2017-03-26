import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fontAwesomeSelectComponent from './fontAwesomeSelect.component';

let fontAwesomeSelectModule = angular.module('fontAwesomeSelect', [
  uiRouter
])

.component('fontAwesomeSelect', fontAwesomeSelectComponent)

.name;

export default fontAwesomeSelectModule;
