class HomeController {
  constructor($scope, JsonFileDatabase, PeopleService, AccountService) {

    this.peopleService = PeopleService;
    this.accountService = AccountService;

    console.log('AccountService', this.accountService.register('hi', 'garrett'));


    JsonFileDatabase.getAll('fruits').then((response) => {
      // console.log('fruits received', response.data);
    });

    JsonFileDatabase.get('fruits', 1).then((response) => {
      // console.log('fruit received', response.data);
    });

    JsonFileDatabase.post('fruits', { name: 'Jackfruit' }).then((response) => {
      // console.log('fruit added', response.data);
    });

    JsonFileDatabase.put('fruits', 5, { id: 5, name: 'Pineapple' }).then((response) => {
      // console.log('fruit updated', response.data);
    });

    JsonFileDatabase.remove('fruits', 1).then((response) => {
      // console.log('fruit deleted', response.data);
    });

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    reset(); // set $scope.data

    // <iconlist> data
    this.listData = [];
    this.peopleService.getAll().then((response) => {
      console.log(response.data);

      this.listData = response.data.map((value, index) => {
        return {
          color: 'red',
          icon: 'fa-rocket',
          value: value.salary,
          sales: value.salary,
          category: value.office,
          title: value.name + ' - ' + value.position
        }
      });
    });

    // this.peopleService.addPerson({ salary: '$27,000,000', office: 'Palo Alto, CA', name: 'Jeremy Lin', position: 'NBA' })
    //   .then((response) => {
    //     console.log('addPerson response', response);
    //   });



    function thisOrThat(a, b) {
      var a = Math.random();

      if (a > 0.5) {
        return a;
      } else {
        return b;
      }
    }

    $scope.minimizer = function () {
      setInterval(() => {
        for (let i = 0; i < $scope.data.length; i++) {
          for (let j = 0; j < $scope.data[i].length; j++) {
            $scope.data[i][j] /= thisOrThat(2, 3);
          }
        }

        $scope.$apply();
      }, 500);
    };

    $scope.update = function () {
      let range = 100;
      let numPoints = 10;

      $scope.onClick(range, numPoints);
    };

    $scope.onClick = function (numPoints, range) {
      $scope.data[0] = generateSeries(numPoints, range, sin);
      $scope.data[1] = generateSeries(numPoints, range, cos);
      $scope.data[2] = generateSeries(numPoints, range / 4, sin);
      $scope.data[3] = generateSeries(numPoints, range / 4, cos);
    };

    function reset() {
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
    }

    function generateSeries(count, range, fn) {
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(fn(i, range))
      }
      return arr;
    }
    function sin(i, range) {
      return Math.sin(i) * range;
    }
    function cos(i, range) {
      return Math.cos(i) * range;
    }

    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  }
}

export default HomeController;
