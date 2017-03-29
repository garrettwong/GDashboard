import angular from 'angular';
import uiRouter from 'angular-ui-router';
import friendSearcherComponent from './friendSearcher.component';

// edit modal
import editModalComponent from './editModal/editModal.component';

let friendSearcherModule = angular.module('friendSearcher', [
  uiRouter
])

.component('editModalComponent', editModalComponent)
.component('friendSearcher', friendSearcherComponent)

.name;

export default friendSearcherModule;
