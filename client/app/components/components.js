import angular from 'angular';

import Home from './home/home';
import About from './about/about';

import Speech from './speech/speech';
import DatePicker from './datepicker/datepicker';

import TestEffortTable from './testefforttable/testefforttable';
import GanntDates from './GanntDates/GanntDates';
import TestEffortTableResults from './TestEffortTableResults/TestEffortTableResults';
import TestEffortDashboard from './TestEffortDashboard/TestEffortDashboard';

import DivTable from './divtable/divtable';
import Tree from './tree/tree';
import ForceGraph from './forcegraph/forcegraph';
import ForceDirectedTree from './forcedirectedtree/forcedirectedtree';
import StretchedTreeMap from './stretchedtreemap/stretchedtreemap';
import TreeMap from './treemap/treemap';
import CollapsibleTree from './collapsibleTree/collapsibleTree';
import SortableBarChart from './sortableBarChart/sortableBarChart';

let componentModule = angular.module('app.components', [
  //pages
  Home,
  About,

  // small components
  Speech,
  DatePicker,
  
  // test efforts
  TestEffortTable,
  GanntDates,
  TestEffortTableResults,
  TestEffortDashboard,
  
  // visualization
  DivTable,
  Tree,
  ForceGraph,
  ForceDirectedTree,
  StretchedTreeMap,
  TreeMap,
  CollapsibleTree,
  SortableBarChart
])
  
.name;

export default componentModule;
