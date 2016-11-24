import $ from 'jquery/dist/jquery';
import jQuery from 'jquery/dist/jquery';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiDropdown from 'angular-ui-bootstrap/src/dropdown';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot';
import 'bootstrap/dist/css/bootstrap.css';

//import NgJsTree from 'ng-js-tree';


angular.module('app', [
    uiRouter,
    uiDropdown,

    //NgJsTree,
    
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
