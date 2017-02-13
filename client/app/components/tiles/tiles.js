import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tilesComponent from './tiles.component';

let tilesModule = angular.module('tiles', [
  uiRouter
])

.component('tiles', tilesComponent)

.name;

export default tilesModule;
