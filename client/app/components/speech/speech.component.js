import template from './speech.html';
import controller from './speech.controller';
import './speech.styl';

let speechComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'model'
};

export default speechComponent;
