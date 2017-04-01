import template from './datatable.html';
import controller from './datatable.controller';
import './datatable.styl';


// DataTables
import 'datatables.net/js/jquery.dataTables.js';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

let datatableComponent = {
  restrict: 'E',
  bindings: {
    data: '=',
    data2: '<'
  },
  template,
  controller: ['$timeout', controller]
};

export default datatableComponent;
