import DatatableModule from './datatable'
import DatatableController from './datatable.controller';
import DatatableComponent from './datatable.component';
import DatatableTemplate from './datatable.html';

describe('Datatable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DatatableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DatatableController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
      // component/directive specs
      let component = DatatableComponent;
      let componentController;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DatatableTemplate);
      });

      it('invokes the right controller', () => {
        if (component.controller instanceof Array) {
          componentController = component.controller[component.controller.length-1];
        } else {
          componentController = component.controller;
        }
        expect(componentController).to.equal(DatatableController);
      });
  });
});
