import TestefforttableModule from './testefforttable'
import TestefforttableController from './testefforttable.controller';
import TestefforttableComponent from './testefforttable.component';
import TestefforttableTemplate from './testefforttable.html';

describe('Testefforttable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TestefforttableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TestefforttableController();
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
      expect(TestefforttableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TestefforttableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TestefforttableTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TestefforttableController);
      });
  });
});
