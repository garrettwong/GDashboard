import template from './fontAwesomeSelect.html';
import controller from './fontAwesomeSelect.controller';
import './fontAwesomeSelect.styl';

let fontAwesomeSelectComponent = {
  restrict: 'E',
  bindings: {
    selected: '=' // 2-way binding
  },
  template,
  controller
};

export default fontAwesomeSelectComponent;
