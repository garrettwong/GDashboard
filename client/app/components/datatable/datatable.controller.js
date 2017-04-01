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
   
  }

  $onInit() {
    //
    console.log($.fn.DataTable);
    this.$timeout(function() {
      $('#a74029').DataTable();
    }, 0)
    
  }

  
}

export default DatatableController;
