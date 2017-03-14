import template from './quoteInput.html';
import controller from './quoteInput.controller';
import './quoteInput.styl';

import SweetAlert from '../../../services/sweetAlertService';

let quoteInputComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: [SweetAlert.getClassName(), controller]
};

export default quoteInputComponent;
