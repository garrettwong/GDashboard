import CollapsibleTreeModule from './collapsibleTree'
import CollapsibleTreeController from './collapsibleTree.controller';
import CollapsibleTreeComponent from './collapsibleTree.component';
import CollapsibleTreeTemplate from './collapsibleTree.html';

describe('CollapsibleTree', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CollapsibleTreeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CollapsibleTreeController();
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
      let component = CollapsibleTreeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CollapsibleTreeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CollapsibleTreeController);
      });
  });
});
