import template from './tiles.html';
import controller from './tiles.controller';
import './tiles.styl';

import CryptoService from '../../services/cryptoService';
import CryptoParser from '../../services/cryptoParser';

let tilesComponent = {
  restrict: 'E',
  bindings: {
    tiles: '<'
  },
  template,
  controller: [
    '$http', 
    CryptoService.getClassName(), 
    CryptoParser.getClassName(),

    controller
  ]
};

export default tilesComponent;
