import D3visualizationsModule from './d3visualizations'
import D3visualizationsController from './d3visualizations.controller';
import D3visualizationsComponent from './d3visualizations.component';
import D3visualizationsTemplate from './d3visualizations.html';

describe('D3visualizations', () => {
  let $rootScope, makeController;

  beforeEach(window.module(D3visualizationsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new D3visualizationsController();
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
      expect(D3visualizationsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = D3visualizationsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(D3visualizationsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(D3visualizationsController);
      });
  });
});
