class FormSamplesController {
  constructor() {
    this.name = 'formSamples';

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
  }
}

export default FormSamplesController;
