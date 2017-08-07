import template from './formSamples.html';
import controller from './formSamples.controller';
import './formSamples.styl';

let formSamplesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['SweetAlert', controller]
};

export default formSamplesComponent;
