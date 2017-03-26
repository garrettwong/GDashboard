import template from './editModal.html';

let editModalComponent = {
  template, // referenced from ./aboutModal.html

  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },

  controllerAs: '$ctrl',

  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.item = $ctrl.resolve.item;
      $ctrl.item.email = 'asdf';
    };

    $ctrl.ok = function () {

      console.log($ctrl.item);
      $ctrl.item.email = 'newvalue.@wd.ccom';

      $ctrl.close({$value: $ctrl.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
}

export default editModalComponent;