class DivtableController {
  constructor($scope) {

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 20; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);


    console.log(this);
    angular.extend(this, $scope);
  }

  remove(row) {
      console.log('removing ', row.label, 
      this.models.lists.A.indexOf(row));

      let indexToRemove = this.models.lists.A.indexOf(row);
      
      this.models.lists.A.splice(indexToRemove, 1);
  }
}

export default DivtableController;
