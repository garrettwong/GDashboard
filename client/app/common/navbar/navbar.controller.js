
class NavbarController {
  constructor() {

    this.visualizations = [
      { name: 'DivTable', sref: 'divtable' },
      { name: 'Force Directed Tree', sref: 'forcedirectedtree' },
      { name: 'Force Graph', sref: 'forcegraph' },
      { name: 'Tree', sref: 'tree' },
      { name: 'Tree Map', sref: 'treemap' },
      { name: 'Tree Stretched', sref: 'stretchedtreemap' },
      { name: 'Collapsible Tree', sref: 'collapsibletree' }
    ];

    this.status = {
      isopen: false
    };

    this.toggled = function (open) {
      $log.log('Dropdown is now: ', open);
    };

    this.toggleDropdown = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }
}

export default NavbarController;
