import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiModal from 'angular-ui-bootstrap/src/modal';

import aboutComponent from './about.component';
import aboutModalController from './about.modal';


let aboutModule = angular.module('about', [
  uiRouter,
  uiModal
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})

.controller('AboutModalController', ['$uibModalInstance', 'items', aboutModalController])
.component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controllerAs: 'model',
  controller: function () {
    var model = this;

    model.$onInit = function () {
      model.items = model.resolve.items;
      model.selected = {
        item: model.items[0]
      };
    };

    model.ok = function () {
      model.close({$value: model.selected.item});
    };

    model.cancel = function () {
      model.dismiss({$value: 'cancel'});
    };
  }
})
.component('about', aboutComponent)
  
.name;

export default aboutModule;
