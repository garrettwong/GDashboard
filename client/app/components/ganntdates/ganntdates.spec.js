import GanntdatesModule from './ganntdates'
import GanntdatesController from './ganntdates.controller';
import GanntdatesComponent from './ganntdates.component';
import GanntdatesTemplate from './ganntdates.html';

describe('Ganntdates', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GanntdatesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GanntdatesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}

  });

  describe('Component', () => {
      // component/directive specs
      let component = GanntdatesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GanntdatesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GanntdatesController);
      });
  });
});
