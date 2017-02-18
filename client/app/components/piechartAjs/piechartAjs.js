import angular from 'angular';
import uiRouter from 'angular-ui-router';
import piechartAjsComponent from './piechartAjs.component';

let piechartAjsModule = angular.module('piechartAjs', [
  uiRouter
])

.component('piechartAjs', piechartAjsComponent)

.name;

export default piechartAjsModule;
