import StretchedtreemapModule from './stretchedtreemap'
import StretchedtreemapController from './stretchedtreemap.controller';
import StretchedtreemapComponent from './stretchedtreemap.component';
import StretchedtreemapTemplate from './stretchedtreemap.html';

describe('Stretchedtreemap', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StretchedtreemapModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StretchedtreemapController();
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
      expect(StretchedtreemapTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StretchedtreemapComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StretchedtreemapTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StretchedtreemapController);
      });
  });
});
