
class NavbarController {
  constructor() {

    this.visualizations = [
      { name: 'DivTable', sref: 'divtable' },
      { name: 'Force Directed Tree', sref: 'forcedirectedtree' },
      { name: 'Force Graph', sref: 'forcegraph' },
      { name: 'Tree', sref: 'tree' },
      { name: 'Tree Map', sref: 'treemap' },
      { name: 'Branched Random Walk', sref: 'branchedrandomwalk' },
      { name: 'Collapsible Tree', sref: 'collapsibletree' },
      { name: 'Salary Graph', sref: 'salarygraph' }
    ];

    this.status = {
      isopen: false
    };

    this.toggle = function (open) {
        this.navbarSideExpanded = this.navbarSideExpanded !== 'expanded' ? 'expanded' : '';
        this.rotateClass = this.rotateClass !== 'fa-rotate-90' ? 'fa-rotate-90' : '';
    };

    this.toggleDropdown = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }
}

export default NavbarController;
