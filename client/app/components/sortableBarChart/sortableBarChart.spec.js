import SortableBarChartModule from './sortableBarChart'
import SortableBarChartController from './sortableBarChart.controller';
import SortableBarChartComponent from './sortableBarChart.component';
import SortableBarChartTemplate from './sortableBarChart.html';

describe('SortableBarChart', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SortableBarChartModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SortableBarChartController();
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
      expect(SortableBarChartTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SortableBarChartComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SortableBarChartTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SortableBarChartController);
      });
  });
});
