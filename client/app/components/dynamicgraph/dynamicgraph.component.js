import template from './dynamicgraph.html';
import controller from './dynamicgraph.controller';
import './dynamicgraph.styl';

let dynamicgraphComponent = {
  restrict: 'E',
  bindings: {
    labels: '=',
    graphData: '<',
    series: '<'
  },
  template,
  controller: ['$scope', controller]
};

export default dynamicgraphComponent;
