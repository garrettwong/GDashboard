import template from './aboutModal.html';

let aboutModalComponent = {
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

      console.log('aboutModal', $ctrl);
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
}

export default aboutModalComponent;

/*
when using property, templateUrl, add a script tag of type="text/ng-template"

<!-- myModalContent.html -->
<script type="text/ng-template" id="myModalContent.html">
  <div class="modal-header">
      <h3 class="modal-title" id="modal-title">I'm a modal!</h3>
  </div>
  <div class="modal-body" id="modal-body">
      <ul>
          <li ng-repeat="item in $ctrl.items">
              <a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = item">{{ item }}</a>
          </li>
      </ul>
      Selected: <b>{{ $ctrl.selected.item }}</b>
  </div>
  <div class="modal-footer">
      <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
      <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>
  </div>
</script>

*/