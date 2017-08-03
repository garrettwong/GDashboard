const moduleName = 'app.componentsAdmin';

import angular from 'angular';

// dependencies
import DataTable from '../datatable/datatable';

// pages
import Users from './users/users';
import Fruits from './fruits/fruits';
import RegistrationForm from './registrationForm/registrationForm';

import Login from './login/login';
import RegisterNewUser from './registerNewUser/registerNewUser';

let componentModule = angular.module(moduleName, [
  // dependencies
  DataTable,

  // pages
  Users,
  Fruits,
  RegistrationForm,

  Login,
  RegisterNewUser,
])
  
.name;

export default componentModule;