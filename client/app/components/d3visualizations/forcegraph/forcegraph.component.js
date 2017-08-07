import template from './forcegraph.html';
import controller from './forcegraph.controller';
import './forcegraph.styl';

let forcegraphComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$uibModal', controller]
};

export default forcegraphComponent;
