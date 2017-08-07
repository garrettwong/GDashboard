import angular from 'angular';

import Home from './home/home';
import About from './about/about';
import Profile from './profile/profile';
import DashboardGrid from './dashboardgrid/dashboardgrid';
import Tiles from './tiles/tiles';
import IconList from './iconlist/iconlist';
import GraphAnalytics from './graphanalytics/graphanalytics';
import PieChartAjs from './piechartAjs/piechartAjs';
import DynamicForm from './dynamicForm/dynamicForm';

// tables
import DataTable from './datatable/datatable';
import TableExamples from './tableexamples/tableexamples';

// lists
import ListBullets from './listbullets/listbullets';

import Speech from './speech/speech';
import DatePicker from './datepicker/datepicker';

import TestEffortTable from './testefforttable/testefforttable';
import GanntDates from './GanntDates/GanntDates';
import TestEffortDashboard from './TestEffortDashboard/TestEffortDashboard';

import d3visualizations from './d3visualizations/d3visualizations';

import SalaryGraph from './salarygraph/salarygraph';
import DynamicGraph from './dynamicgraph/dynamicgraph';
import BarGraph from './bargraph/bargraph';
import PieChart from './piechart/piechart';

// Admin
import ComponentsAdmin from './admin/componentsAdmin';

// plugins
import ChartJsModules from './chartjsModules';
import DynamicFormRenderer from './dynamicFormRenderer/dynamicFormRenderer';
import DynamicObjectFormRenderer from './dynamicObjectFormRenderer/dynamicObjectFormRenderer';


import FontAwesomeSelect from './fontAwesomeSelect/fontAwesomeSelect';
import FriendSearcher from './friendSearcher/friendSearcher';

let componentModule = angular.module('app.components', [
  //pages
  Home,

  // forms
  About,
  Profile,
  DashboardGrid,
  Tiles,
  IconList,
  GraphAnalytics,
  PieChartAjs,
  DynamicForm,

  // lists
  ListBullets,

  // tables
  DataTable,
  TableExamples,

  // small components
  Speech,
  DatePicker,
  
  // test efforts
  TestEffortTable,
  GanntDates,
  TestEffortDashboard,
  
  // visualization
  d3visualizations,
  
  SalaryGraph,
  DynamicGraph,
  BarGraph,
  PieChart,

  // admin
  ComponentsAdmin,
  
  // plugins
  FontAwesomeSelect,
  FriendSearcher,

  // modules
  ChartJsModules,
  DynamicFormRenderer,
  DynamicObjectFormRenderer
])
  
.name;

export default componentModule;
