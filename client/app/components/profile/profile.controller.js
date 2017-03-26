class ProfileController {
  constructor($uibModal) {
    this.name = 'profile';

    this.items = [1];
    this.$uibModal = $uibModal;
  }

  /*
   *
   */
  openEditModal(ref) {
    let model = this;

    var modalInstance = this.$uibModal.open({
        animation: true,
        component: 'modalComponent',
        resolve: {
          items: function () {
            console.log(model.items, 'items');;
            return model.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        console.log(model.selected, selectedItem, 'selected');
        model.selected = selectedItem;
      }, function () {
        
      });
  }
}

export default ProfileController;
