import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formSamplesComponent from './formSamples.component';

let formSamplesModule = angular.module('formSamples', [
  uiRouter
])

.component('formSamples', formSamplesComponent)

.name;

export default formSamplesModule;
