import TesteffortdashboardModule from './testeffortdashboard'
import TesteffortdashboardController from './testeffortdashboard.controller';
import TesteffortdashboardComponent from './testeffortdashboard.component';
import TesteffortdashboardTemplate from './testeffortdashboard.html';

describe('Testeffortdashboard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TesteffortdashboardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TesteffortdashboardController();
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
      expect(TesteffortdashboardTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TesteffortdashboardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TesteffortdashboardTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TesteffortdashboardController);
      });
  });
});
