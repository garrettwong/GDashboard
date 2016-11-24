class DatepickerController {
  constructor() {
    var model = this;

    model.today = function () {
      model.dt = new Date();
    };
    model.today();

    model.clear = function () {
      alert('hi');

      model.dt = null;
    };

    model.options = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    // Disable weekend selection
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    model.toggleMin = function () {
      model.options.minDate = model.options.minDate ? null : new Date();
    };

    model.toggleMin();

    model.getValue = () => {
      alert(model.dt);
    };

    model.setDate = function (year, month, day) {
      model.dt = new Date(year, month, day);
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    model.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

    function getDayClass(data) {
      var date = data.date,
        mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

        for (var i = 0; i < model.events.length; i++) {
          var currentDay = new Date(model.events[i].date).setHours(0, 0, 0, 0);

          if (dayToCheck === currentDay) {
            return model.events[i].status;
          }
        }
      }

      return '';
    }
  }
}

export default DatepickerController;
