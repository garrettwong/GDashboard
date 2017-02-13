
import moment from 'moment/moment.js';
import 'moment/min/locales.min';


class TestefforttableController {
  constructor($http) {
    var model = this;

    model.title = 'GANTT Table';
    model.rows = [];

    model.dates = [];

/* Test Code */
    var fullDateRange = [];
    Date.prototype.addDays = function(days)
    {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    };

    model.formatDate = function(date) {
      var year = date.getFullYear();
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      return month + '/' + day + '/' + year.toString().substr(2);
    };

    model.stringToDate = function(dateStr) {
      return moment(dateStr).format('MM/DD/YYYY');
    };

    var intervals = 5;
    for(let i = 0; i < intervals; i++) {
      model.dates.push(new Date());

      let d = {
        date: (new Date()).addDays(-14).addDays(i*7)
      };
      d.calc = d.date.getTime();

      fullDateRange.push(d);
    }

    // find lowest calc
    // and highest calc
    var min = Number.MAX_VALUE, max = Number.MIN_VALUE;
    for (let i in fullDateRange) {
      if (min > fullDateRange[i].calc) {
        min = fullDateRange[i].calc;
      }
      if (max < fullDateRange[i].calc) {
        max = fullDateRange[i].calc;
      }
    }

    var diff = max - min;
    // now scale to 0 - 100
    function scaleTo100(val) {
      console.log(val, min, diff);
      var scaledValue = (val - min)*100 / (diff); // scale
      return scaledValue < 0 ? 0 : scaledValue;
    }

    model.fullDateRange = fullDateRange;
    model.scale = scaleTo100;

    
    // get todays scale
    var today = new Date();
    model.todayAdjustment = model.scale(today.getTime()) + '%';
    model.width = 72 * intervals;// 72 is the width of a block
    console.log(model.width, 'width');
/* End Test Code */

/*
scroll event
*/
    // angular.element('.flipped').bind('scroll', function(a, b) {
    //   console.log(a, b);
    // })

    $http({
      method: 'GET',
      url: './testdata.json'
    }).then(function successCallback(response) {
      
        // this callback will be called asynchronously
        // when the response is available
        model.rows = response.data;

        // go through model.rows and update the start and ends
        for (var rIdx in model.rows) {
          var row = model.rows[rIdx];
          for (var mIdx in row.milestones) {
            var startTime = (new Date(row.milestones[mIdx].startDate)).getTime();
            var endTime = (new Date(row.milestones[mIdx].endDate)).getTime();
            
            // row.milestones[mIdx].start = model.scale(startTime);
            // row.milestones[mIdx].end = model.scale(endTime);

            console.log(row.milestones, 'mileson');
          }
        }

        console.log(model.rows);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    model.addDate = function(y, m, d) {
      model.dates.push(new Date(y, m, d));
    };

    model.removeDate = function() {
      model.dates.splice(1);
    };

    
    
  }

  
}

export default TestefforttableController;
