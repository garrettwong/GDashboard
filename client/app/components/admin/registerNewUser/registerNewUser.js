import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerNewUserComponent from './registerNewUser.component';

import RegisterNewUserService from './registerNewUser.service';

let registerNewUserModule = angular.module('registerNewUser', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('registerNewUser', {
      url: '/registerNewUser',
      component: 'registerNewUser'
    });
})


.service(RegisterNewUserService.getClassName(), ['$http', RegisterNewUserService])

.component('registerNewUser', registerNewUserComponent)

.name;

export default registerNewUserModule;
