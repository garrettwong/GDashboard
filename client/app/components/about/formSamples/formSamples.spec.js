import FormSamplesModule from './formSamples'
import FormSamplesController from './formSamples.controller';
import FormSamplesComponent from './formSamples.component';
import FormSamplesTemplate from './formSamples.html';

describe('FormSamples', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FormSamplesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FormSamplesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {

  });

  describe('Template', () => {
    
  });

  describe('Component', () => {
      // component/directive specs
      let component = FormSamplesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FormSamplesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FormSamplesController);
      });
  });
});
