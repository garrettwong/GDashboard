import template from './salarygraph.html';
import controller from './salarygraph.controller';
import './salarygraph.styl';
import SalaryGraphService from './salarygraph.service';
import SalaryGraphParser from './salarygraph.parser';
import SalaryGraphDataConverter from './salarygraph.dataconverter';


import uiModal from 'angular-ui-bootstrap/src/modal';

let salarygraphComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: [
    '$http',
    '$timeout',
    '$uibModal',
    SalaryGraphService.getClassName(), 
    SalaryGraphParser.getClassName(),
    SalaryGraphDataConverter.getClassName(),
    controller]
};

export default salarygraphComponent;
