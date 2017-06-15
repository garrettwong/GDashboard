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
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FruitsComponent;
      let componentController;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FruitsTemplate);
      });

      it('invokes the right controller', () => {
        if (component.controller instanceof Array) {
          componentController = component.controller[component.controller.length-1];
        } else {
          componentController = component.controller;
        }
        expect(componentController).to.equal(FruitsController);
      });

  });
});
