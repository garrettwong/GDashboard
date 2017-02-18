import template from './graphanalytics.html';
import controller from './graphanalytics.controller';
import './graphanalytics.styl';

let graphanalyticsComponent = {
  restrict: 'E',
  bindings: {
    listData: '=',
    graphData: '='
  },
  template,
  controller
};

export default graphanalyticsComponent;
