import TreeModule from './tree'
import TreeController from './tree.controller';
import TreeComponent from './tree.component';
import TreeTemplate from './tree.html';

describe('Tree', () => {
  let $rootScope, $timeout, makeController;

  beforeEach(window.module(TreeModule));
  beforeEach(inject((_$rootScope_, _$timeout_) => {
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
    makeController = () => {
      return new TreeController($rootScope.$new(), $timeout);
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
      let component = TreeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TreeTemplate);
      });
  });
});
