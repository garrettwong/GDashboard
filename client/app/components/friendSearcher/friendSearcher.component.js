import template from './friendSearcher.html';
import controller from './friendSearcher.controller';
import './friendSearcher.styl';

let friendSearcherComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$uibModal', controller]
};

export default friendSearcherComponent;
