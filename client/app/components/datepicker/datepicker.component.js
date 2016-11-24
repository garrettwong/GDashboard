import template from './datepicker.html';
import controller from './datepicker.controller';
import './datepicker.styl';

let datepickerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'model'
};

export default datepickerComponent;
