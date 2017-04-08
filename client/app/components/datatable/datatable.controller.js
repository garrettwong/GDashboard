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
    console.log($.fn.DataTable);
    this.$timeout(() => {
      this.dtRef = $('#a74029').DataTable();
    }, 0)
    
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
    if(!angular.equals(this.previous.data, this.data)){
      console.log('data $doCheck', this.data, this.data2);

      this.previous.data = angular.copy(this.data);
    }

    // on data change
    if(!angular.equals(this.previous.data2, this.data2)){
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

  
}

export default DatatableController;
