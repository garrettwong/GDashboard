import TableExamplesModule from './tableExamples'
import TableExamplesController from './tableExamples.controller';
import TableExamplesComponent from './tableExamples.component';
import TableExamplesTemplate from './tableExamples.html';

describe('TableExamples', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TableExamplesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TableExamplesController();
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
      let component = TableExamplesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TableExamplesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TableExamplesController);
      });
  });
});
