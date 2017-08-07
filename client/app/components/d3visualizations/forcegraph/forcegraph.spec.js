import ForcegraphModule from './forcegraph'
import ForcegraphController from './forcegraph.controller';
import ForcegraphComponent from './forcegraph.component';
import ForcegraphTemplate from './forcegraph.html';

describe('Forcegraph', () => {
  let $rootScope, $uibModal, makeController;

  beforeEach(window.module(ForcegraphModule));
  beforeEach(inject((_$rootScope_, _$uibModal_) => {
    $rootScope = _$rootScope_;
    $uibModal = _$uibModal_;
    
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
      let component = ForcegraphComponent;


  });
});
