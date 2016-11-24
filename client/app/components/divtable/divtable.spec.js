import DivtableModule from './divtable'
import DivtableController from './divtable.controller';
import DivtableComponent from './divtable.component';
import DivtableTemplate from './divtable.html';

describe('Divtable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DivtableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DivtableController();
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
      expect(DivtableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DivtableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DivtableTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DivtableController);
      });
  });
});
