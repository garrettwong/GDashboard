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
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BranchedrandomwalkTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
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
