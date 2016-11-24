import DatepickerModule from './datepicker'
import DatepickerController from './datepicker.controller';
import DatepickerComponent from './datepicker.component';
import DatepickerTemplate from './datepicker.html';

describe('Datepicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DatepickerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DatepickerController();
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
      expect(DatepickerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DatepickerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DatepickerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DatepickerController);
      });
  });
});
