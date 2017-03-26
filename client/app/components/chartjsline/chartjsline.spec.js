import ChartjslineModule from './chartjsline'
import ChartjslineController from './chartjsline.controller';
import ChartjslineComponent from './chartjsline.component';
import ChartjslineTemplate from './chartjsline.html';

describe('Chartjsline', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChartjslineModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChartjslineController();
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
      expect(ChartjslineTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ChartjslineComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ChartjslineTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ChartjslineController);
      });
  });
});
