import template from './users.html';
import controller from './users.controller';
import './users.styl';
import JsonFileDatabase from '../../services/jsonFileDatabase';

let usersComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: [JsonFileDatabase.getClassName(), controller]
};

export default usersComponent;
