import QuoteInputModule from './quoteInput'
import QuoteInputController from './quoteInput.controller';
import QuoteInputComponent from './quoteInput.component';
import QuoteInputTemplate from './quoteInput.html';

describe('QuoteInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(QuoteInputModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new QuoteInputController();
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
      let component = QuoteInputComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(QuoteInputTemplate);
      });
  });
});
