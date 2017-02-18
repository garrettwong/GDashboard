import GraphanalyticsModule from './graphanalytics'
import GraphanalyticsController from './graphanalytics.controller';
import GraphanalyticsComponent from './graphanalytics.component';
import GraphanalyticsTemplate from './graphanalytics.html';

describe('Graphanalytics', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GraphanalyticsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GraphanalyticsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });


  describe('Component', () => {
      // component/directive specs
      let component = GraphanalyticsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GraphanalyticsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GraphanalyticsController);
      });
  });
});
