/*
 * https://datatables.net/download/npm
 * 
 * 
 */
class DatatableController {
  constructor($timeout) {
    this.name = 'datatable';
    this.$timeout = $timeout;
    this.generatedId = 'a74029';

    this.dtRef = null;
  }

  $onInit() {
    //
    console.log('this', this);

    this.$timeout(() => {
      this.dataTableSetup();
    }, 0)

    // previous map to track changes
    this.previous = {
      columns: angular.copy(this.columns),
      rows: angular.copy(this.rows)
    };
  }

  $onChanges(changesObj) {
    console.log('data table $onChanges', changesObj);
  }

  $doCheck() {
    // on col header change
    console.log('something changed', this);

    if (!angular.equals(this.previous.columns, this.columns)) {
      console.log('data $doCheck', this.columns, this.rows);

      for(var kIdx = 0; kIdx < this.columns.length; kIdx++) {
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
      $('#a74029 thead, #a74029 tbody').html('');
    }

    let columnExtensions = [{
      "class": 'details-control fa fa-plus',
      "orderable": false,
      "data": null,
      "defaultContent": ''
    }];
  
    console.log(this.columns, this.rows);
    if (this.columns) {
      columnExtensions = columnExtensions.concat(this.columns);
    }

    console.log('col', JSON.stringify(this.rows), JSON.stringify(columnExtensions));

    this.dtRef = $('#a74029').DataTable({
      columns: columnExtensions,

      data: this.rows,

      "order": [[1, 'asc']]
    });

    this.registerRowSlideDown();
  }

  registerRowSlideDown() {
    let _self = this;

    // Add event listener for opening and closing details
    $('#a74029 tbody').off('click', 'td.details-control')
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
  format(d) {
    // `d` is the original data object for the row
    return '<div class="slider">' +
      '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      '<tr>' +
      '<td>Full name:</td>' +
      '<td>' + d.name + '</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Extension number:</td>' +
      '<td>' + d.extn + '</td>' +
      '</tr>' +
      '<tr>' +
      '<td>Extra info:</td>' +
      '<td>And any further details here (images etc)...</td>' +
      '</tr>' +
      '</table>' +
      '</div>';
  }

}

export default DatatableController;
