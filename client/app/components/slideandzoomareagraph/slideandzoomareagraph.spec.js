import SlideandzoomareagraphModule from './slideandzoomareagraph'
import SlideandzoomareagraphController from './slideandzoomareagraph.controller';
import SlideandzoomareagraphComponent from './slideandzoomareagraph.component';
import SlideandzoomareagraphTemplate from './slideandzoomareagraph.html';

describe('Slideandzoomareagraph', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SlideandzoomareagraphModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SlideandzoomareagraphController();
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
      expect(SlideandzoomareagraphTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SlideandzoomareagraphComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SlideandzoomareagraphTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SlideandzoomareagraphController);
      });
  });
});
