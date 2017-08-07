import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timezoneStateSelectComponent from './timezoneStateSelect.component';
import StateService from './stateService'

let timezoneStateSelectModule = angular.module('timezoneStateSelect', [
  uiRouter
])

.service('StateService', ['$http', StateService])

.component('timezoneStateSelect', timezoneStateSelectComponent)

.name;

export default timezoneStateSelectModule;
