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
      expect(IconlistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
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
