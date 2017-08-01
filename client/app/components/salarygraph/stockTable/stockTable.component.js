import template from './stockTable.html';
import './stockTable.styl';

/* Simple Color Based Rendering for Stock Table */
let stockTableComponent = {
  restrict: 'E',

  template: template,

  bindings: {
    listData: '<'
  },

  controller: [function () {
    console.log('stockTable component');
  }]
}

export default stockTableComponent;