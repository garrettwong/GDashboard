import template from './ganntdates.html';
import controller from './ganntdates.controller';
import './ganntdates.styl';

let ganntdatesComponent = {
  restrict: 'E',
  bindings: {
    dates: '<',
    
    age: '<',
    milestones: '<',
    width: '<'
  },
  template,
  controller
};

export default ganntdatesComponent;
