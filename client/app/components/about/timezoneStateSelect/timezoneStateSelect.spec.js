import TimezoneStateSelectModule from './timezoneStateSelect'
import TimezoneStateSelectController from './timezoneStateSelect.controller';
import TimezoneStateSelectComponent from './timezoneStateSelect.component';
import TimezoneStateSelectTemplate from './timezoneStateSelect.html';

describe('timezoneStateSelect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TimezoneStateSelectModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TimezoneStateSelectController();
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
      let component = TimezoneStateSelectComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TimezoneStateSelectTemplate);
      });
  });
});
