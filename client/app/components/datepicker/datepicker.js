import angular from 'angular';
import uiRouter from 'angular-ui-router';
import datepickerComponent from './datepicker.component';

import uiDatepicker from 'angular-ui-bootstrap/src/datepicker';

let datepickerModule = angular.module('datepicker', [
  uiRouter,
  uiDatepicker
])

.component('datepicker', datepickerComponent)

.name;

export default datepickerModule;
