import ForcegraphModule from './forcegraph'
import ForcegraphController from './forcegraph.controller';
import ForcegraphComponent from './forcegraph.component';
import ForcegraphTemplate from './forcegraph.html';

describe('Forcegraph', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForcegraphModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForcegraphController();
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
      expect(ForcegraphTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ForcegraphComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ForcegraphTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ForcegraphController);
      });
  });
});
