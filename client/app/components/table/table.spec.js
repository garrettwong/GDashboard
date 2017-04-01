import TableModule from './table'
import TableController from './table.controller';
import TableComponent from './table.component';
import TableTemplate from './table.html';

describe('Table', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TableController();
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
      expect(TableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TableTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TableController);
      });
  });
});
