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
    
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    
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
