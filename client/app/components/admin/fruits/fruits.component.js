import template from './fruits.html';
import controller from './fruits.controller';
import './fruits.styl';

// DataTables
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

import fruitsService from './fruits.service';

let fruitsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$uibModal', '$timeout', fruitsService.getClassName(), controller]
};

export default fruitsComponent;
