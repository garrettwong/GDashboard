import template from './salarygraph.html';
import controller from './salarygraph.controller';
import './salarygraph.styl';
import SalaryGraphService from './salarygraph.service';
import SalaryGraphParser from './salarygraph.parser';
import SalaryGraphDataConverter from './salarygraph.dataconverter';

let salarygraphComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: [
    '$http', 
    '$timeout', 
    SalaryGraphService.getClassName(), 
    SalaryGraphParser.getClassName(),
    SalaryGraphDataConverter.getClassName(),
    controller]
};

export default salarygraphComponent;
