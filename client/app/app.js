import $ from 'jquery/dist/jquery';
import jQuery from 'jquery/dist/jquery';
import bootstrap from 'bootstrap/dist/js/bootstrap';
// import chartjs from 'Chart.js/Chart';
// import bootstrapSwitch from 'bootstrap-switch/dist/js/boostrap-switch';
import matchHeight from 'matchHeight/jquery.matchHeight';


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularUi from 'angular-ui-bootstrap';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'angular-drag-and-drop-lists/angular-drag-and-drop-lists';

// styles
// import 'https://fonts.googleapis.com/css?family=Droid+Sans';
import 'normalize.css';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.min.css';
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css';
import 'checkbox3/dist/checkbox3.min.css'
import 'DataTables/media/css/jquery.dataTables.min.css'
import 'datatables/media/css/dataTables.bootstrap.css';
import 'select2/dist/css/select2.min.css';

import './styles/style.css';
import './styles/theme.css';

angular.module('app', [
  uiRouter,
  angularUi,

  'dndLists',
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
