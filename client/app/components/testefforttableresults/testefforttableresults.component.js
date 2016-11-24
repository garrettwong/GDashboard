import template from './testefforttableresults.html';
import controller from './testefforttableresults.controller';
import './testefforttableresults.styl';

let testefforttableresultsComponent = {
  restrict: 'E',
  bindings: {
    testEffort: '<',
    
    testEffortTable: '<'
  },
  template,
  controller
};

export default testefforttableresultsComponent;
