import RegistrationFormModule from './registrationForm'
import RegistrationFormController from './registrationForm.controller';
import RegistrationFormComponent from './registrationForm.component';
import RegistrationFormTemplate from './registrationForm.html';

describe('RegistrationForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RegistrationFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RegistrationFormController();
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
      expect(RegistrationFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RegistrationFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RegistrationFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RegistrationFormController);
      });
  });
});
