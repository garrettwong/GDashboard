class AboutController {
  constructor($uibModal, SweetAlert, JsonFileDatabase) {

    var model = this;

    this.SweetAlert = SweetAlert;

    console.log($uibModal);

    model.items = ['a', 'b', 'c'];

    model.animationsEnabled = true;


    this.initCollapsePane();


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

  initCollapsePane() {
    $('.collapse-link').on('click', function() {
        var $BOX_PANEL = $(this).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });
  }

}

export default AboutController;
