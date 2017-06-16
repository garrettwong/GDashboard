import template from './fruitsModal.html';

let fruitsModalComponent = {
  //templateUrl: 'myModalContent.html', // inline html on about.html
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
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };

    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
}

export default fruitsModalComponent;