import angular from 'angular';
import uiRouter from 'angular-ui-router';
import d3visualizationsComponent from './d3visualizations.component';

// components
import DivTable from './divtable/divtable';
import Tree from './tree/tree';
import ForceGraph from './forcegraph/forcegraph';
import ForceDirectedTree from './forcedirectedtree/forcedirectedtree';
import BranchedRandomWalk from './branchedrandomwalk/branchedrandomwalk';
import TreeMap from './treemap/treemap';
import CollapsibleTree from './collapsibleTree/collapsibleTree';
import SortableBarChart from './sortableBarChart/sortableBarChart';
import SlideAndZoomAreaGraph from './slideandzoomareagraph/slideandzoomareagraph';

let d3visualizationsModule = angular.module('d3visualizations', [
  uiRouter,

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


])

.component('d3visualizations', d3visualizationsComponent)

.name;

export default d3visualizationsModule;
