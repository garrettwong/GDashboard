import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registrationFormComponent from './registrationForm.component';

let registrationFormModule = angular.module('registrationForm', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('registrationForm', {
      url: '/registrationForm',
      component: 'registrationForm'
    });
})


.component('registrationForm', registrationFormComponent)

.name;

export default registrationFormModule;
