import template from './dynamicForm.html';
import controller from './dynamicForm.controller';
import './dynamicForm.styl';

let dynamicFormComponent = {
  restrict: 'E',
  bindings: {
    columns: '=',
    dataset: '='
  },
  template,
  controller
};

export default dynamicFormComponent;
