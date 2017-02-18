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
