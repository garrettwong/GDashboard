import template from './divtable.html';
import controller from './divtable.controller';
import './divtable.styl';

let divtableComponent = {
  restrict: 'E',
  bindings: {

  },
  template,
  controller: ['$scope', controller]
};

export default divtableComponent;
