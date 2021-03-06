class QuoteInputController {
  constructor(SweetAlert, $uibModal) {
    this.name = 'quoteInput';
    
    this.SweetAlert = SweetAlert;

    this.initModals($uibModal);
  }

  getQuote() {
    let quotes = [
      'Yesterday is gone thats why they call it the past, tomorrow is not here that is why they call it the future.  Today is a gift, thus the present',
      '80% of problems can be solved with 20% of the effort.  the remaining 20% requires 80% of the effort - Pareto Efficiency Principle',
      'A knick in time saves nine',
      'You miss 100% of the shots that you dont take - Wayne Gretzy - Michael Scott',
      'Ive seen people grow up get bigger and age, its a new time, so make the most of who you are'
    ]; // move this to a service

    let randomIndex = Math.floor(Math.random() * quotes.length);  
    let quote = quotes[randomIndex];

    this.SweetAlert.swal('Quote of the day', `${quote}`, 'success');
  }

  initModals($uibModal) {
    let model = this;
    
    model.items = ['a', 'b', 'c'];
    model.animationsEnabled = true;

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

export default QuoteInputController;
