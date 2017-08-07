class FormSamplesController {
  constructor(SweetAlert) {
    this.name = 'formSamples';
    this.swal = SweetAlert.swal;

    this.initDateOptions();
  }

  initDateOptions() {
    // date bindings
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
  }

  showFormDetails(isValid) {
    if (!isValid) {
      this.swal('Form not filled out', 'Error', 'error');
    } else {
      this.swal('Form Details', JSON.stringify(this), 'info');
    }
  }
}

export default FormSamplesController;
