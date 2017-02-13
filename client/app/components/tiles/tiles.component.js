import template from './tiles.html';
import controller from './tiles.controller';
import './tiles.styl';

let tilesComponent = {
  restrict: 'E',
  bindings: {
    tiles: '<'
  },
  template,
  controller
};

export default tilesComponent;
