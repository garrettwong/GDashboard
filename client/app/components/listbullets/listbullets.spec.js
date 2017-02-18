import ListbulletsModule from './listbullets'
import ListbulletsController from './listbullets.controller';
import ListbulletsComponent from './listbullets.component';
import ListbulletsTemplate from './listbullets.html';

describe('Listbullets', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ListbulletsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ListbulletsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
      // component/directive specs
      let component = ListbulletsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ListbulletsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ListbulletsController);
      });
  });
});
