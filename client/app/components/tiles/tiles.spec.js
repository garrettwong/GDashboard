import TilesModule from './tiles'
import TilesController from './tiles.controller';
import TilesComponent from './tiles.component';
import TilesTemplate from './tiles.html';

describe('Tiles', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TilesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TilesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
      // component/directive specs
      let component = TilesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TilesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TilesController);
      });
  });
});
