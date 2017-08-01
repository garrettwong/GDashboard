import template from './tableExamples.html';
import controller from './tableExamples.controller';
import './tableExamples.styl';

import tableExamplesService from './tableExamples.service';

let tableExamplesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: [tableExamplesService.getClassName(), controller]
};

export default tableExamplesComponent;
