import angular from 'angular';
import uiRouter from 'angular-ui-router';
import treeComponent from './tree.component';

let treeModule = angular.module('tree', [
  uiRouter
])
.config(function(){
  // $.jstree.defaults.core.themes.url = true;
  // $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
})
.config(routeConfig)
.component('tree', treeComponent)

.name;

export default treeModule;


/** @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
      .state('tree', {
        url: '/tree',
        component: 'tree',
        title: 'Tree View',
        sidebarMeta: {
          order: 200,
        },
      });
}