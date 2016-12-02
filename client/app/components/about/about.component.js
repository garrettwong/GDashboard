import template from './about.html';
import controller from './about.controller';
import uiModal from 'angular-ui-bootstrap/src/modal';

import SweetAlert from '../../services/sweetAlertService';
import JsonFileDatabase from '../../services/jsonFileDatabase';

console.log(JsonFileDatabase);

import './about.styl';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$uibModal', SweetAlert.getClassName(), JsonFileDatabase, controller]
};

export default aboutComponent;