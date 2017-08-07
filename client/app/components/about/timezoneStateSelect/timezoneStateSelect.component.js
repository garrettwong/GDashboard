
import template from './timezoneStateSelect.html';
import controller from './timezoneStateSelect.controller';
import './timezoneStateSelect.styl';

let timezoneStateSelectComponent = {
  restrict: 'E',
  bindings: {
    selectedValue: '=',
    onChange: '&'
  },
  template,
  controller: [controller]
};

export default timezoneStateSelectComponent;
