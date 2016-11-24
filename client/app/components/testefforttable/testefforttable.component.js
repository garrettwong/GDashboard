import template from './testefforttable.html';
import controller from './testefforttable.controller';
import './testefforttable.styl';

let testefforttableComponent = {
  restrict: 'E',
  bindings: {
    dates: '<'
  },
  template,
  controller: ['$http', controller],
  controllerAs: 'model'
};


export default testefforttableComponent;
