import TestefforttableresultsModule from './testefforttableresults'
import TestefforttableresultsController from './testefforttableresults.controller';
import TestefforttableresultsComponent from './testefforttableresults.component';
import TestefforttableresultsTemplate from './testefforttableresults.html';

describe('Testefforttableresults', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TestefforttableresultsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TestefforttableresultsController();
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
      expect(TestefforttableresultsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TestefforttableresultsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TestefforttableresultsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TestefforttableresultsController);
      });
  });
});
