import IconlistModule from './iconlist'
import IconlistController from './iconlist.controller';
import IconlistComponent from './iconlist.component';
import IconlistTemplate from './iconlist.html';

describe('Iconlist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(IconlistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new IconlistController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });



  describe('Component', () => {
      // component/directive specs
      let component = IconlistComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(IconlistTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(IconlistController);
      });
  });
});
