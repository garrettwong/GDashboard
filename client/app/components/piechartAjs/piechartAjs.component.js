import template from './piechartAjs.html';
import controller from './piechartAjs.controller';
import './piechartAjs.styl';

let piechartAjsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$scope', controller]
};

export default piechartAjsComponent;
