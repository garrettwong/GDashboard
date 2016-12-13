import DynamicgraphModule from './dynamicgraph'
import DynamicgraphController from './dynamicgraph.controller';
import DynamicgraphComponent from './dynamicgraph.component';
import DynamicgraphTemplate from './dynamicgraph.html';

describe('Dynamicgraph', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DynamicgraphModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DynamicgraphController();
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

});
