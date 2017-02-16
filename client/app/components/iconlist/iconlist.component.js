import template from './iconlist.html';
import controller from './iconlist.controller';
import './iconlist.styl';

let iconlistComponent = {
  restrict: 'E',
  bindings: {
    listData: '<',
    selectedListData: '=',
    onClick: '&'
  },
  template,
  controller
};

export default iconlistComponent;
