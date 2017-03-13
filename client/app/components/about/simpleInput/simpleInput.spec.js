import SimpleInputModule from './simpleInput'
import SimpleInputController from './simpleInput.controller';
import SimpleInputComponent from './simpleInput.component';
import SimpleInputTemplate from './simpleInput.html';

describe('SimpleInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SimpleInputModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SimpleInputController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a gender property', () => {
      let controller = makeController();
      expect(controller).to.have.property('gender');
    });

    it('gender should be set to Default', () => {
      let controller = makeController();
      console.log(controller);
      expect(controller.gender).to.equal('Default');
    });

    // trigger click change
    beforeEach(() => {
      let controller = makeController();
      controller.update('Male');

      it('gender should be set to Male', () => {
        expect(controller.gender).to.equal('Male');
      });
    });
  });

  describe('Template', () => {
    /*    chai/lib/chai/core/assertions.js
    *     expect('test').to.be.a('string');
    *     expect({ foo: 'bar' }).to.be.an('object');
    *     expect(null).to.be.a('null');
    *     expect(undefined).to.be.an('undefined');
    *     expect(new Error).to.be.an('error');
    *     expect(new Promise).to.be.a('promise');
    *     expect(new Float32Array()).to.be.a('float32array');
    *     expect(Symbol()).to.be.a('symbol');
    */
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('template should be non null', () => {
      expect(SimpleInputTemplate).to.be.a('string');
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SimpleInputComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SimpleInputTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SimpleInputController);
      });
  });
});
