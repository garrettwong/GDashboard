import template from './salarygraphProfile.html';
import './salarygraphProfile.styl';

/* Simple Color Based Rendering for Stock Table */
let salarygraphProfileComponent = {
  restrict: 'E',

  template: template,

  bindings: {
    listData: '<'
  },

  controller: [function () {
    console.log('salarygraphProfile component');
  }]
}

export default salarygraphProfileComponent;