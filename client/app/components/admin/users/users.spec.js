import UsersModule from './users'
import UsersController from './users.controller';
import UsersComponent from './users.component';
import UsersTemplate from './users.html';

describe('Users', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UsersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UsersController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });


  describe('Component', () => {
      // component/directive specs
      let component = UsersComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UsersTemplate);
      });
  });
});
