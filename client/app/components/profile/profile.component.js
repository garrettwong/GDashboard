import template from './profile.html';
import controller from './profile.controller';
import './profile.styl';

let profileComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$uibModal', controller]
};

export default profileComponent;
