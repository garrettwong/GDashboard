import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiModal from 'angular-ui-bootstrap/src/modal';

import aboutModalController from './aboutModal/aboutModal.controller';
import aboutModalComponent from './aboutModal/aboutModal.component';
import aboutComponent from './about.component';
import simpleInput from './simpleInput/simpleInput';
import formSamples from './formSamples/formSamples';

let aboutModule = angular.module('about', [
  uiRouter,
  uiModal,

  // subcomponents
  simpleInput,
  formSamples
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})

.controller('AboutModalController', ['$uibModalInstance', 'items', aboutModalController])

.component('modalComponent', aboutModalComponent)
.component('about', aboutComponent)
  
.name;

export default aboutModule;