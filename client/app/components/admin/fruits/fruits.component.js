import template from './fruits.html';
import controller from './fruits.controller';
import './fruits.styl';

let fruitsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default fruitsComponent;
