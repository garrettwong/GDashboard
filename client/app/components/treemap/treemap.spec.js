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
