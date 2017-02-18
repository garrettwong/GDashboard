import PiechartAjsModule from './piechartAjs'
import PiechartAjsController from './piechartAjs.controller';
import PiechartAjsComponent from './piechartAjs.component';
import PiechartAjsTemplate from './piechartAjs.html';

describe('PiechartAjs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PiechartAjsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PiechartAjsController();
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
      expect(PiechartAjsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PiechartAjsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PiechartAjsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PiechartAjsController);
      });
  });
});
