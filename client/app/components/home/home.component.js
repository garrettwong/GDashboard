import template from './home.html';
import controller from './home.controller';
import './home.styl';
import PeopleService from '../../services/peopleService';
import AccountService from '../../services/accountService';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: ['$scope', 'JsonFileDatabase', PeopleService.getClassName(), AccountService.getClassName(), controller]
};

export default homeComponent;
