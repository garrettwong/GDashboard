import PiechartModule from './piechart'
import PiechartController from './piechart.controller';
import PiechartComponent from './piechart.component';
import PiechartTemplate from './piechart.html';

describe('Piechart', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PiechartModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PiechartController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });


  describe('Component', () => {
      // component/directive specs
      let component = PiechartComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PiechartTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PiechartController);
      });
  });
});
