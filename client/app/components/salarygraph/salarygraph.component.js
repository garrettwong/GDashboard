import template from './salarygraph.html';
import controller from './salarygraph.controller';
import './salarygraph.styl';
import SalaryGraphService from './salarygraph.service';

let salarygraphComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$http', '$timeout', SalaryGraphService.getClassName(), controller]
};

export default salarygraphComponent;
