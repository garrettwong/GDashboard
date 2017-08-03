import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

import loginService from './login.service';

let loginModule = angular.module('login', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    });
})

.service(loginService.getClassName(), ['$http', loginService])

.component('login', loginComponent)

.name;

export default loginModule;
