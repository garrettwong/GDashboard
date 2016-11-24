import TreemapModule from './treemap'
import TreemapController from './treemap.controller';
import TreemapComponent from './treemap.component';
import TreemapTemplate from './treemap.html';

describe('Treemap', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TreemapModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TreemapController();
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
      expect(TreemapTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TreemapComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TreemapTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TreemapController);
      });
  });
});
