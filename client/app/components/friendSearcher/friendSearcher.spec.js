import FriendSearcherModule from './friendSearcher'
import FriendSearcherController from './friendSearcher.controller';
import FriendSearcherComponent from './friendSearcher.component';
import FriendSearcherTemplate from './friendSearcher.html';

describe('FriendSearcher', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FriendSearcherModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FriendSearcherController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });
});