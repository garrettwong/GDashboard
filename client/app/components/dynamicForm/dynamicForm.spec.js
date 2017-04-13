import DynamicFormModule from './dynamicForm'
import DynamicFormController from './dynamicForm.controller';
import DynamicFormComponent from './dynamicForm.component';
import DynamicFormTemplate from './dynamicForm.html';

describe('DynamicForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DynamicFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DynamicFormController();
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
      expect(DynamicFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DynamicFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DynamicFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DynamicFormController);
      });
  });
});
