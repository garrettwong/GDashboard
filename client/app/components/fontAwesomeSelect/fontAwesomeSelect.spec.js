import FontAwesomeSelectModule from './fontAwesomeSelect'
import FontAwesomeSelectController from './fontAwesomeSelect.controller';
import FontAwesomeSelectComponent from './fontAwesomeSelect.component';
import FontAwesomeSelectTemplate from './fontAwesomeSelect.html';

describe('FontAwesomeSelect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FontAwesomeSelectModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FontAwesomeSelectController();
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

  describe('Component', () => {
      // component/directive specs
      let component = FontAwesomeSelectComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FontAwesomeSelectTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FontAwesomeSelectController);
      });
  });
});
