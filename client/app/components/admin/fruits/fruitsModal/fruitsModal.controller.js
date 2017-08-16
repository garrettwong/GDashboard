class FruitsModalController {
  constructor($uibModalInstance, items) {
    var model = this;

    this.$uibModalInstance = $uibModalInstance;

    model.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

  ok() {
    console.log('okay button clicked', this.newFruitName);

    this.$uibModalInstance.close(this.newFruitName);
  }

  ok2() {
    alert('gay');
  }
  cancel() {

  }
}


export default fruitsModalComponent;
