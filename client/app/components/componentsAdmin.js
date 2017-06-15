const moduleName = 'app.componentsAdmin';

import angular from 'angular';

// tables
import DataTable from './datatable/datatable';
import TableExamples from './tableexamples/tableexamples';

// lists
import ListBullets from './listbullets/listbullets';

// admin
import Users from './users/users';
import Fruits from './fruits/fruits';

let componentModule = angular.module(moduleName, [
  // tables
  DataTable,
  TableExamples,

  // admin
  Users,
  Fruits
])
  
.name;

export default componentModule;