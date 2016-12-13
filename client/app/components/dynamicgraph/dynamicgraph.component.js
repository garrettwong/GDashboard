import template from './dynamicgraph.html';
import controller from './dynamicgraph.controller';
import './dynamicgraph.styl';

let dynamicgraphComponent = {
  restrict: 'E',
  bindings: {
    labels: '=',
    graphData: '<'
  },
  template,
  controller: ['$scope', controller]
};

export default dynamicgraphComponent;
