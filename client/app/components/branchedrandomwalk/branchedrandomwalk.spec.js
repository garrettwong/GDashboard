import BranchedrandomwalkModule from './branchedrandomwalk'
import BranchedrandomwalkController from './branchedrandomwalk.controller';
import BranchedrandomwalkComponent from './branchedrandomwalk.component';
import BranchedrandomwalkTemplate from './branchedrandomwalk.html';

describe('Branchedrandomwalk', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BranchedrandomwalkModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BranchedrandomwalkController();
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
      let component = BranchedrandomwalkComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BranchedrandomwalkTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BranchedrandomwalkController);
      });
  });
});
