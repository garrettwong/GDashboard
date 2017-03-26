import template from './fontAwesomeSelect.html';
import controller from './fontAwesomeSelect.controller';
import './fontAwesomeSelect.styl';

let fontAwesomeSelectComponent = {
  restrict: 'E',
  bindings: {
    selected: '<'
  },
  template,
  controller
};

export default fontAwesomeSelectComponent;
