import template from './about.html';
import controller from './about.controller';
import uiModal from 'angular-ui-bootstrap/src/modal';

import './about.styl';

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$uibModal', controller]
};

export default aboutComponent;
