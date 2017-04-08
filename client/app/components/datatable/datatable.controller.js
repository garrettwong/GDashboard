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

    this.data2 = [
      {
        "name": "Tiger Nixon",
        "position": "System Architect",
        "salary": "$320,800",
        "office": "Edinburgh"
      },
      {
        "name": "Garrett Winters",
        "position": "Accountant",
        "salary": "$170,750",
        "office": "Tokyo",
      }];

    this.$timeout(() => {
      this.setup();
    }, 0)

    // previous map to track changes
    this.previous = {
      data: angular.copy(this.data),
      data2: angular.copy(this.data2)
    };
  }

  $onChanges(changesObj) {
    console.log('data table $onChanges', changesObj);
  }

  $doCheck() {
    // on col header change
    if (!angular.equals(this.previous.data, this.data)) {
      console.log('data $doCheck', this.data, this.data2);

      this.previous.data = angular.copy(this.data);
    }

    // on data change
    if (!angular.equals(this.previous.data2, this.data2)) {
      console.log('data2 $doCheck', this.data2);

      this.previous.data2 = angular.copy(this.data2);

      if (this.dtRef) {
        this.dtRef.destroy();
      }
      this.dtRef = $('#a74029').DataTable({
        data: this.data2
      })
    }
  }

  setup() {

    console.log(this.data2);

    this.dtRef = $('#a74029').DataTable({
      columns: [
        {
          "class": 'details-control fa fa-plus',
          "orderable": false,
          "data": null,
          "defaultContent": ''
        },
        
        { title: 'Name', "data": "name" },
        { title: 'Position', "data": "position" },
        { title: 'Office', "data": "office" },
        { title: 'Salary', "data": "salary" }
      ],

      data: this.data2,

      "order": [[1, 'asc']]
    });

    this.registerRowSlideDown();
  }
  
  registerRowSlideDown() {
    let _self = this;
    console.log('registering', this);

    // Add event listener for opening and closing details
    $('#a74029 tbody').on('click', 'td.details-control', function () {
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
