class FruitsController {
  constructor($uibModal, $timeout, FruitService) {
    this.name = 'fruits';
    this.$uibModal = $uibModal;
    this.$timeout = $timeout;
    this.fruitService = FruitService;

    this._generatedId = 'dtFruits';
    this._jqueryId = '#' + this._generatedId;

    this._dtRef = null;
  }

  getFruitColumns() {
    this.columns = [
      {
        title: "Id",
        data: 'id',
        type: 'text'
      }, {
        title: "Name",
        data: 'name',
        type: 'text'
      }
    ];
  }

  getFruitData() {
    // set this.rows
    this.fruitService.getAll().then((response) => {
      console.log('fruits received', response.data);
      this.rows = response.data;
    });
  }

  $onInit() {
    this.$timeout(() => {
      this.dataTableSetup();
    }, 0)

    // previous map to track changes
    this.previous = {
      columns: angular.copy(this.columns),
      rows: angular.copy(this.rows)
    };

    this.getFruitColumns();
    this.getFruitData();
  }

  $doCheck() {
    // on col header change
    if (this.columns === undefined || this.rows === undefined) return;

    if (!angular.equals(this.previous.columns, this.columns)) {
      console.log('data $doCheck', this.columns, this.rows);

      for (var kIdx = 0; kIdx < this.columns.length; kIdx++) {
        // for each property ensure that it exists on all objects
        for (var oIdx = 0; oIdx < this.rows.length; oIdx++) {
          let propName = this.columns[kIdx].data;
          if (!this.rows[oIdx].hasOwnProperty(propName)) {
            this.rows[oIdx][propName] = 'A';
          }
        }
      }

      this.previous.columns = angular.copy(this.columns);
    }

    // on data change
    if (!angular.equals(this.previous.rows, this.rows)) {
      console.log('rows $doCheck', this.rows);

      this.previous.rows = angular.copy(this.rows);

      this.dataTableSetup();
    }
  }

  dataTableSetup() {
    if (this.dtRef) {
      this.dtRef.destroy();
      $(this._jqueryId).find('thead').html('');
      $(this._jqueryId).find('tbody').html('');
    }

    let columnExtensions = [{
      "class": 'details-control fa fa-plus-circle text-primary',
      "orderable": false,
      "data": null,
      "defaultContent": ''
    }];

    if (this.columns) {
      columnExtensions = columnExtensions.concat(this.columns);
    }

    console.log('setting up data table with rows and cols', JSON.stringify(this.rows), JSON.stringify(columnExtensions));
    console.log($(this._jqueryId));

    this.dtRef = $(this._jqueryId).DataTable({
      columns: columnExtensions,

      data: this.rows,

      "order": [[1, 'asc']]
    });

    this.registerRowSlideDown();
  }

  registerRowSlideDown() {
    let _self = this;

    // Add event listener for opening and closing details
    $(this._jqueryId).find('tbody').off('click', 'td.details-control')
      .on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = _self.dtRef.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          $('div.slider', row.child()).slideUp(function () {
            row.child.hide();
            tr.removeClass('shown');
          });
        }

        else {
          // Open this row
          row.child(_self.format(row.data()), 'no-padding').show();
          tr.addClass('shown');

          $('div.slider', row.child()).slideDown();
        }
      });
  }

  /* Formatting function for row details - modify as you need */
  // `d` is the original data object for the row
  format(d) {
    return `
      <div class="slider">
        <table cellpadding="10" cellspacing="2" border="1" style="padding: 25px;">
          <thead></thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>${d.name}</td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }

  openAddNew() {
    this.items = [1];
    this.$uibModal.open({
      animation: true,
      component: 'fruitsModalComponent',
      resolve: {
        items: function () {
          console.log('durrr');
          
          return ['haro'];
        }
      }
    });
  }
  
  openAdmin() {
      alert('open admin');
  }


}

export default FruitsController;
