import angular from 'angular';
import uiRouter from 'angular-ui-router';
import quoteInputComponent from './quoteInput.component';

let quoteInputModule = angular.module('quoteInput', [
  uiRouter
])

.component('quoteInput', quoteInputComponent)

.name;

export default quoteInputModule;
