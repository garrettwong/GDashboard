import template from './registerNewUser.html';
import controller from './registerNewUser.controller';
import './registerNewUser.styl';

import SweetAlert from '../../../services/sweetAlertService';
import RegisterNewUserService from './registerNewUser.service';

let registerNewUserComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: [SweetAlert.getClassName(), RegisterNewUserService.getClassName(), controller]
};

export default registerNewUserComponent;
