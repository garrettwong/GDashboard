import DashboardgridModule from './dashboardgrid'
import DashboardgridController from './dashboardgrid.controller';
import DashboardgridComponent from './dashboardgrid.component';
import DashboardgridTemplate from './dashboardgrid.html';

describe('Dashboardgrid', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DashboardgridModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DashboardgridController();
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
      expect(DashboardgridTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DashboardgridComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DashboardgridTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DashboardgridController);
      });
  });
});
