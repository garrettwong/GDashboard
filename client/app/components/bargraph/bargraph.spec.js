import BargraphModule from './bargraph'
import BargraphController from './bargraph.controller';
import BargraphComponent from './bargraph.component';
import BargraphTemplate from './bargraph.html';

describe('Bargraph', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BargraphModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BargraphController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });



  describe('Component', () => {
      // component/directive specs
      let component = BargraphComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BargraphTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BargraphController);
      });
  });
});
