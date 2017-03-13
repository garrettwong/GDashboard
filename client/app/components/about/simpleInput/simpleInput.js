import angular from 'angular';
import uiRouter from 'angular-ui-router';
import simpleInputComponent from './simpleInput.component';

let simpleInputModule = angular.module('simpleInput', [
  uiRouter
])

.component('simpleInput', simpleInputComponent)

.name;

export default simpleInputModule;
