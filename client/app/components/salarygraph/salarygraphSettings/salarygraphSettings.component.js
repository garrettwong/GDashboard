import template from './salaryGraphSettings.html';
import './salaryGraphSettings.styl';

let salaryGraphSettingsComponent = {
  template: template,

  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },

  controllerAs: '$ctrl',

  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };

      console.log('salaryGraphSettings controller', $ctrl);
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
}

export default salaryGraphSettingsComponent;