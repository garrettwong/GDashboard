import angular from 'angular';
import uiRouter from 'angular-ui-router';
import usersComponent from './users.component';

let usersModule = angular.module('users', [
  uiRouter
])


.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('users', {
      url: '/users',
      component: 'users'
    });
})

.component('users', usersComponent)

.name;

export default usersModule;
