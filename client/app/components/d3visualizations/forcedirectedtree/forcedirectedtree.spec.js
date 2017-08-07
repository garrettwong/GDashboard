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
    
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    
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
