import NavbarModule from './navbar'

describe('Navbar', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(NavbarModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('navbar', {
        $scope: $rootScope.$new()
      });
    });

    it('has a visualizations property', () => {
      expect(controller).to.have.property('visualizations');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<navbar></navbar>')(scope);
      scope.$apply();
    });
  });
});
