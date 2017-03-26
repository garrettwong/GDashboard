class ProfileController {
  constructor($uibModal) {
    this.name = 'profile';

    this.items = [1];
    this.$uibModal = $uibModal;

    this.users = [
      {
        name: 'Bryan Lim',
        email: 'limlam8@gmail.com',
        phone: '(909) 203-3577',
        faIcon: 'fa-user-md',
        location: 'SF'
      },

      {
        name: 'Eric Koo',
        email: 'erickoo@gmail.com',
        phone: '(909) 204-3577',
        faIcon: 'fa-venus',
        location: 'SF'
      }
    ];
  }

  /*
   *
   */
  openEditModal(ref) {
    let model = this;

    var modalInstance = this.$uibModal.open({
        animation: true,
        component: 'editModalComponent',
        resolve: {
          item: function () {
            return ref;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        model.selected = selectedItem;
        
        console.log('selectedItem', model.selected);
      }, function () {
        
      });
  }
}

export default ProfileController;
