import angular from 'angular';

import Home from './home/home';
import About from './about/about';
import Login from './login/login';
import Profile from './profile/profile';
import DashboardGrid from './dashboardgrid/dashboardgrid';
import Tiles from './tiles/tiles';
import IconList from './iconlist/iconlist';

import ListBullets from './listbullets/listbullets';

import Speech from './speech/speech';
import DatePicker from './datepicker/datepicker';

import TestEffortTable from './testefforttable/testefforttable';
import GanntDates from './GanntDates/GanntDates';
import TestEffortDashboard from './TestEffortDashboard/TestEffortDashboard';

import DivTable from './divtable/divtable';
import Tree from './tree/tree';
import ForceGraph from './forcegraph/forcegraph';
import ForceDirectedTree from './forcedirectedtree/forcedirectedtree';
import BranchedRandomWalk from './branchedrandomwalk/branchedrandomwalk';
import TreeMap from './treemap/treemap';
import CollapsibleTree from './collapsibleTree/collapsibleTree';
import SortableBarChart from './sortableBarChart/sortableBarChart';
import SlideAndZoomAreaGraph from './slideandzoomareagraph/slideandzoomareagraph';

import SalaryGraph from './salarygraph/salarygraph';
import DynamicGraph from './dynamicgraph/dynamicgraph';
import BarGraph from './bargraph/bargraph';
import PieChart from './piechart/piechart';

let componentModule = angular.module('app.components', [
  //pages
  Home,

  // forms
  About,
  Login,
  Profile,
  DashboardGrid,
  Tiles,
  IconList,

  // lists
  ListBullets,

  // small components
  Speech,
  DatePicker,
  
  // test efforts
  TestEffortTable,
  GanntDates,
  TestEffortDashboard,
  
  // visualization
  DivTable,
  Tree,
  ForceGraph,
  ForceDirectedTree,
  BranchedRandomWalk,
  TreeMap,
  CollapsibleTree,
  SortableBarChart,
  SlideAndZoomAreaGraph,
  
  SalaryGraph,
  DynamicGraph,
  
  BarGraph,
  PieChart
])
  
.name;

export default componentModule;
