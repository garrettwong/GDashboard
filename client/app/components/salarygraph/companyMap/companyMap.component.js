import template from './companyMap.html';
import './companyMap.styl';

// JqvMap
import 'jqvmap/dist/jquery.vmap.js';
import 'jqvmap/dist/maps/jquery.vmap.world.js';
import 'jqvmap/dist/jqvmap.css';

/* Simple Color Based Rendering for Stock Table */
let companyMapComponent = {
  restrict: 'E',

  template: template,

  bindings: {
    listData: '<'
  },

  controller: ['$timeout', function ($timeout) {

    this.$onInit = function () {
      $timeout(() => {    
        jQueryVmap('#vmap').vectorMap({ map: 'world_en' });
      }, 0);
    };
  }]
}

export default companyMapComponent;