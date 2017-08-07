
import template from './timezoneStateSelect.html';
import controller from './timezoneStateSelect.controller';
import './timezoneStateSelect.styl';

import StateService from './stateService';

let timezoneStateSelectComponent = {
  restrict: 'E',
  bindings: {
    selectedValue: '=',
    onChange: '&'
  },
  template,
  controller: [StateService.getClassName(), controller]
};

export default timezoneStateSelectComponent;
