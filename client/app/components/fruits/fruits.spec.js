import FruitsModule from './fruits'
import FruitsController from './fruits.controller';
import FruitsComponent from './fruits.component';
import FruitsTemplate from './fruits.html';

describe('Fruits', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FruitsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FruitsController();
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
      expect(FruitsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FruitsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FruitsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FruitsController);
      });
  });
});
