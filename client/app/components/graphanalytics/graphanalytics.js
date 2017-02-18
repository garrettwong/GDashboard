import angular from 'angular';
import uiRouter from 'angular-ui-router';
import graphanalyticsComponent from './graphanalytics.component';

let graphanalyticsModule = angular.module('graphanalytics', [
  uiRouter
])

.component('graphanalytics', graphanalyticsComponent)

.name;

export default graphanalyticsModule;
