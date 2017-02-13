import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iconlistComponent from './iconlist.component';

let iconlistModule = angular.module('iconlist', [
  uiRouter
])

.component('iconlist', iconlistComponent)

.name;

export default iconlistModule;
