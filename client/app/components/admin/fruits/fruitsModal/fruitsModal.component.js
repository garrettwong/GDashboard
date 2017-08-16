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

    $ctrl.ok = function () {
      console.log('im ga');
      $ctrl.close({$value: $ctrl.newFruitName});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
}

export default fruitsModalComponent;