import angular from 'angular';
import uiRouter from 'angular-ui-router';
import piechartComponent from './piechart.component';

let piechartModule = angular.module('piechart', [
  uiRouter
])



.component('piechart', piechartComponent)

.name;

export default piechartModule;
