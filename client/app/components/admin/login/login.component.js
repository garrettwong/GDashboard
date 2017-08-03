import template from './login.html';
import controller from './login.controller';
import './login.styl';

import SweetAlert from '../../../services/sweetAlertService';
import LoginService from './login.service';
import RegisterNewUserService from '../registerNewUser/registerNewUser.service';

let loginComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: [SweetAlert.getClassName(), LoginService.getClassName(), RegisterNewUserService.getClassName(), controller]
};

export default loginComponent;
