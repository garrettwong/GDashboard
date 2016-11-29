import TestefforttableModule from './testefforttable'
import TestefforttableController from './testefforttable.controller';
import TestefforttableComponent from './testefforttable.component';
import TestefforttableTemplate from './testefforttable.html';

describe('Testefforttable', () => {
  let $rootScope, $http, makeController;

  beforeEach(window.module(TestefforttableModule));
  beforeEach(inject((_$rootScope_, _$http_) => {
    $rootScope = _$rootScope_;
    $http = _$http_;

    makeController = () => {
      return new TestefforttableController($http);
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
      let component = TestefforttableComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TestefforttableTemplate);
      });

  });
});
