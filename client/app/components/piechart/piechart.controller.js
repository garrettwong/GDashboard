import * as d3 from 'd3';

class PiechartController {
  constructor() {
    let width, height;
    let chartWidth, chartHeight;
    let margin;
    let svg = d3.select('#piechartcontainer').append('svg');
    let chartLayer = svg.append('g').classed('chartLayer', true);

    // initiate data
    d3.csv('piechartdata.csv', cast, main);

    function cast(d) {
      d.value = +d.value;
      return d;
    }

    function main(data) {
      setSize(data);
      drawChart(data);
    }

    function setSize(data) {
      width = document.querySelector('#piechartcontainer').clientWidth;
      height = document.querySelector('#piechartcontainer').clientHeight;

      margin = { top: 40, left: 0, bottom: 40, right: 0};

      chartWidth = width - (margin.left+margin.right);
      chartHeight = height - (margin.top+margin.bottom);

      svg
        .attr('width', width)
        .attr('height', height);

      chartLayer
        .attr('width', chartWidth)
        .attr('height', chartHeight)
        .attr('transform', 'translate(' + [margin.left, margin.top] + ')');
    }

    function drawChart(data) {
      let arcs = d3.pie()
        .sort(null)
        .value(function(d) { return d.value; })
        (data);

      let arc = d3.arc()
        .outerRadius(chartHeight/2)
        .innerRadius(chartHeight/4)
        .padAngle(0.03)
        .cornerRadius(8);

      let pieG = chartLayer.selectAll('g')
        .data([data])
        .enter()
        .append('g')
        .attr('transform', 'translate(' + [chartWidth/2, chartHeight/2] + ')');

      let block = pieG.selectAll('.arc')
        .data(arcs);

      let newBlock = block.enter().append('g').classed('arc', true);

      let blockPath = newBlock.append('path')
        .attr('d', arc)
        .attr('id', function(d, i) { return 'arc-' +i})
        .attr('stroke', 'gray')
        .attr('fill', function(d, i) { return d3.interpolateViridis(Math.random() ) });

      newBlock.append('text')
        .attr('dx', 55)
        .attr('dy', -5)
        .append('textPath')
        .attr('xlink:href', function(d, i) { return '#arc-' + i; })
        .text(function(d) { console.log(d); return d.data.name; });

      // newBlock
      //   .attr('fill', function(d, i) { return d3.interpolateCool(Math.random()); });

      // d3indepth.com for interpolate scale functions
      blockPath
        .on('mouseover', function(d, i) {
          console.log(d3.select(this), d, i);
          
          // change fill and edge color (stroke)
          d3.select(this)
            .attr('stroke', 'orange')
            .attr('fill', function(d, i) { return d3.interpolateInferno(Math.random() )});
        });

      // append text middle of graph
      svg.append('g')
        .append('text')
        .attr('dx', chartWidth/2 - 75)
        .attr('dy', chartHeight/2 + 50)
        .attr('stroke', '#0E1B42')
        .attr('stroke-width', '1.2')
        .text(function(d) { return 'Lines of communictation' });
    }
  }
}

export default PiechartController;
