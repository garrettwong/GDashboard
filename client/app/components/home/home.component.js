import template from './home.html';
import controller from './home.controller';
import './home.styl';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$scope', 'JsonFileDatabase', controller]
};

export default homeComponent;
