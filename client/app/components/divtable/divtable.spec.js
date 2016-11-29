import DivtableModule from './divtable'
import DivtableController from './divtable.controller';
import DivtableComponent from './divtable.component';
import DivtableTemplate from './divtable.html';

describe('Divtable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DivtableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DivtableController($rootScope.$new());
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
      let component = DivtableComponent;
      
  });
});
