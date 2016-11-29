import AboutModule from './about'

describe('About', () => {
  let $rootScope, $state, $location, $componentController, $compile, $uibModal, JsonFileDatabase;

  beforeEach(window.module(AboutModule));

  // beforeEach(inject(($injector) => {
  //   $rootScope = $injector.get('$rootScope');
  //   $componentController = $injector.get('$componentController');
  //   $state = $injector.get('$state');
  //   $location = $injector.get('$location');
  //   $compile = $injector.get('$compile');
  //   $uibModal = $injector.get('$uibModal');
  //   JsonFileDatabase = $injector.get('JsonFileDatabase');
  // }));

  // describe('Module', () => {
  //   // top-level specs: i.e., routes, injection, naming
  //   it('About component should be visible when navigates to /about', () => {
    
  //   });
  // });

  // describe('Controller', () => {
  //   // controller specs
  //   let controller;
  //   beforeEach(() => {
  //     controller = $componentController('about', {
  //       $uibModal, 
  //       JsonFileDatabase
  //     });
  //   });


  // });

  // describe('View', () => {
  //   // view layer specs.
  //   let scope, template;

  //   beforeEach(() => {
  //     scope = $rootScope.$new();
  //     template = $compile('<about></about>')(scope);
  //     scope.$apply();
  //   });


  // });
});
