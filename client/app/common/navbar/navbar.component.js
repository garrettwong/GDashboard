import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';


let navbarComponent = {
  restrict: 'E',
  bindings: {
    navbarSideExpanded: '=',
  },
  template,
  controller: [controller]
};

export default navbarComponent;
