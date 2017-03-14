class AboutController {
  constructor($uibModal, SweetAlert, JsonFileDatabase) {
    var model = this;

    this.SweetAlert = SweetAlert;

    console.log($uibModal);

    model.items = ['a', 'b', 'c'];

    model.animationsEnabled = true;

    // dates
    this.dt = '';
    this.dt2 = '';

    function disabled(data) {
      var date = data.date,
          mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }
    
    this.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    this.open1 = function() {
      this.popup1.opened = true;
    };

    this.open2 = function() {
      this.popup2.opened = true;
    };

    this.popup1 = {
      opened: false
    };

    this.popup2 = {
      opened: false
    };

    /*
     * @function open
     * @description opens modal via controller method
     */
    model.open = function (size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

      console.log(model.items);

      var modalInstance = $uibModal.open({
        animation: model.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'controllerModal.html',
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

}

export default AboutController;
