class AboutController {
  constructor($uibModal, SweetAlert, JsonFileDatabase, StateService) {
    this.SweetAlert = SweetAlert;
    this.StateService = StateService;

    this.StateService.getStates().then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })

    this.initCollapsePane();
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

  onChangeTimezoneStateSelect() {
    this.SweetAlert.swal('Changing value from: ', this.timezoneStateSelectValue, 'info');
  }

}

export default AboutController;
