import angular from 'angular';

import ChartJsLine from './chartjsline/chartjsline';
import ChartJsBar from './chartjsbar/chartjsbar';
import ChartJsPie from './chartjspie/chartjspie';
import ChartJsBubble from './chartjsbubble/chartjsbubble';

/*
 * @module chartjsModule
 * @description module containing references to chart js graphs
 */
let chartjsModule = angular.module('app.chartjsModules', [
  ChartJsLine,
  ChartJsBar,
  ChartJsPie,
  ChartJsBubble
])
  
.name;

export default chartjsModule;
