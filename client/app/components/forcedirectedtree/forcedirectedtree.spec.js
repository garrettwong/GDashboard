import ForcedirectedtreeModule from './forcedirectedtree'
import ForcedirectedtreeController from './forcedirectedtree.controller';
import ForcedirectedtreeComponent from './forcedirectedtree.component';
import ForcedirectedtreeTemplate from './forcedirectedtree.html';

describe('Forcedirectedtree', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForcedirectedtreeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForcedirectedtreeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ForcedirectedtreeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ForcedirectedtreeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ForcedirectedtreeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ForcedirectedtreeController);
      });
  });
});
