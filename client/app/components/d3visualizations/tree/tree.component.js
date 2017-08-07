import template from './tree.html';
import controller from './tree.controller';
import './tree.styl';

let treeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$scope', '$timeout', controller]
};

export default treeComponent;
