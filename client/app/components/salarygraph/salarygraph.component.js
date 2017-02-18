import template from './salarygraph.html';
import controller from './salarygraph.controller';
import './salarygraph.styl';

let salarygraphComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$http', '$timeout', controller]
};

export default salarygraphComponent;
