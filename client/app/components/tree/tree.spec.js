import TreeModule from './tree'
import TreeController from './tree.controller';
import TreeComponent from './tree.component';
import TreeTemplate from './tree.html';

describe('Tree', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TreeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TreeController();
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
      expect(TreeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TreeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TreeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TreeController);
      });
  });
});
