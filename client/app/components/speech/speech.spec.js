import SpeechModule from './speech'
import SpeechController from './speech.controller';
import SpeechComponent from './speech.component';
import SpeechTemplate from './speech.html';

describe('Speech', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SpeechModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SpeechController();
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
      expect(SpeechTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SpeechComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SpeechTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SpeechController);
      });
  });
});
