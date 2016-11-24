class AboutController {
  constructor($uibModal, JsonFileDatabase) {
    var model = this;

    console.log($uibModal);

    model.items = ['a', 'b', 'c'];

    model.animationsEnabled = true;

    model.open = function (size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

      console.log(model.items);

      var modalInstance = $uibModal.open({
        animation: model.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'AboutModalController',
        controllerAs: 'model',
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return model.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        model.selected = selectedItem;
      }, function () {
        
      });
    };



    model.openComponentModal = function () {
      var modalInstance = $uibModal.open({
        animation: model.animationsEnabled,
        component: 'modalComponent',
        resolve: {
          items: function () {
            return model.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        model.selected = selectedItem;
      }, function () {
        
      });
    };

  }

  sayHello() {
    alert(`Hello ${this.phrase}`);
  }
}

export default AboutController;
