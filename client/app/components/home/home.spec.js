import HomeModule from './home'

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile, JsonFileDatabase;

  beforeEach(window.module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');

    JsonFileDatabase = $injector.get('JsonFileDatabase');
  }));

  let getPromiseResult = (promise, object) => {
    promise()
      .then(function (value) {
        object.resolved = value;
      })
      .catch(function (value) {
        object.rejected = value;
      });
  };


  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });


  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new()
      });
    });

    console.log('JsonFileDatabase', JsonFileDatabase);
  });

  describe('when home is launched', () => {
    let getAll, controller;

    beforeEach(() => {
      //mock dependencies
      getAll = sinon.stub(JsonFileDatabase, 'getAll').returnsPromise();

      let mockData = {
        testEffort: {
          status: true,
          data: {
            drivePrograms: [{ name: 'Sirius', id: 233 }],
            milestones: [],
            commonTestPlanGroups: []
          }
        }
      };

      controller = $componentController('home', { JsonFileDatabase }, mockData);
    });

    it('getAll should resolve', () => {
      let result = [];
      let expectObject = {};

      getAll.resolves(result);
      getPromiseResult(getAll, expectObject);

      expect(expectObject.resolved).to.eql([]);
    });

    it('getAll stub method should be called when existing test effort is not passed in', () => {
      expect(getAll.called).to.be.true;
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<home></home>')(scope);
      scope.$apply();
    });


  });
});
