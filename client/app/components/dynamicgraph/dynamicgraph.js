import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dynamicgraphComponent from './dynamicgraph.component';

let dynamicgraphModule = angular.module('dynamicgraph', [
  uiRouter
])

.component('dynamicgraph', dynamicgraphComponent)

.name;

export default dynamicgraphModule;
