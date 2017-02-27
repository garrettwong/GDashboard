import PiechartAjsModule from './piechartAjs'
import PiechartAjsController from './piechartAjs.controller';
import PiechartAjsComponent from './piechartAjs.component';
import PiechartAjsTemplate from './piechartAjs.html';

describe('PiechartAjs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PiechartAjsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PiechartAjsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });
  
  describe('Component', () => {
      // component/directive specs
      let component = PiechartAjsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PiechartAjsTemplate);
      });
  });
});
