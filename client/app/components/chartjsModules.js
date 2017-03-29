import angular from 'angular';

import ChartJsLine from './chartjsline/chartjsline';
import ChartJsBar from './chartjsbar/chartjsbar';
import ChartJsPie from './chartjspie/chartjspie';

/*
 * @module chartjsModule
 * @description module containing references to chart js graphs
 */
let chartjsModule = angular.module('app.chartjsModules', [
  ChartJsLine,
  ChartJsBar,
  ChartJsPie
])
  
.name;

export default chartjsModule;
