const moduleName = 'app.componentsAdmin';

import angular from 'angular';

// dependencies
import DataTable from './datatable/datatable';
import TableExamples from './tableexamples/tableexamples';

// pages
import Users from './users/users';
import Fruits from './fruits/fruits';

let componentModule = angular.module(moduleName, [
  // dependencies
  DataTable,
  TableExamples,

  // pages
  Users,
  Fruits
])
  
.name;

export default componentModule;