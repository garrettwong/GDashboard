import SweetAlert from '../../services/sweetAlertService';

import template from './dynamicForm.html';
import controller from './dynamicForm.controller';
import './dynamicForm.styl';

let dynamicFormComponent = {
  restrict: 'E',
  bindings: {
    columns: '=',
    dataset: '=',
    
    addColumnHeaderItemFunc: '&',
    columnHeaderItem: '=',

    addDatasetItemFunc: '&',
    datasetItem: '=',
  },
  template,
  controller: [ SweetAlert.getClassName(), controller]
};

export default dynamicFormComponent;
