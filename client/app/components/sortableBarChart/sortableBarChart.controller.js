import * as d3 from 'd3';

class SortableBarChartController {
  constructor() {

    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      radius = 10;

    var formatPercent = d3.format(".0%");

    // var drag = d3.behavior.drag()
    //   .origin(function (d) { return d; })
    //   .on("drag", dragmove);

    function dragmove(d) {
      d3.select(this)
        .attr("cy", d.frequency = 0.08);
      console.log(this);
    }

    var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1, 1);

    var y = d3.scale.linear()
      .range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(formatPercent);

    var line = d3.svg.line()
      .x(function (d, i) {
        return x(d.letter);
      })
      .y(function (d, i) {
        return y(d.frequency);
      });

    var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("sortable-bar-chart.tsv", function (error, data) {

      data.forEach(function (d) {
        d.frequency = +d.frequency;
      });

      x.domain(data.map(function (d) { return d.letter; }));
      y.domain([0, d3.max(data, function (d) { return d.frequency; })]);

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

      // add smooth line
      var linePath = svg.append("path")
        .datum(data)
        .attr("class", "line2")
        .attr("d", line)
      console.log(linePath);
      var totalLength = linePath.node().getTotalLength();

      linePath
        .attr("stroke-dasharray", totalLength + " " + totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(2000)
        .ease("linear")
        .attr("stroke-dashoffset", 0);

      // add lines
      var lines = svg.selectAll('.line')
        .data(data)
        .enter().append("line")
        .attr("class", "line")
        // .attr("x", function(d) { return x(d.letter); })
        // .attr("width", x.rangeBand()/2)
        // .attr("y", function(d) { return y(d.frequency); })
        // .attr("height", function(d) { return height - y(d.frequency); });
        .attr("x1", function (d) { return x(d.letter); })
        .attr("y1", function (d) { return y(d.frequency); })
        .attr("x2", function (d) { return x(d.letter) * 2; })
        .attr("y2", function (d) { return y(d.frequency) * 2; })
        .attr("stroke", "purple");

      var secondLines = svg.selectAll('.secondLine')
        .data(data)
        .enter().append("line2")
        .attr("class", "secondLine")
        // .attr("x", function(d) { return x(d.letter); })
        // .attr("width", x.rangeBand()/2)
        // .attr("y", function(d) { return y(d.frequency); })
        // .attr("height", function(d) { return height - y(d.frequency); });
        .attr("x1", function (d) { return x(d.letter); })
        .attr("y1", function (d) { return y(d.frequency); })
        .attr("x2", function (d) { return x(d.letter) + x.rangeBand(); })
        .attr("y2", function (d) { return y(d.frequency); })
        .attr("stroke", "purple")
        .attr("stroke-width", 8);

      console.log(lines);
      // .attr("x1", m[1])
      // 	.attr("y1", function(d) {return y2(d.lane);})
      // 	.attr("x2", w)
      // 	.attr("y2", function(d) {return y2(d.lane);})
      // 	.attr("stroke", "blue");

      // add bars
      svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) { return x(d.letter); })
        .attr("width", x.rangeBand())
        .attr("y", function (d) { return y(d.frequency); })
        .attr("height", function (d) { return height - y(d.frequency); })
        .on("mouseover", function (d, i) {
          console.log(d3.select(data[i]));
          d3.select(this).style("fill", "red");
        })
        .on("mouseout", function (d, i) {
          console.log(d3.select(data[i]));
          d3.select(this).style("fill", "blue");
        })
        .on("click", function (d, i) {
          console.log('click!');
          d3.select(this).style("fill", "gold");
        });

      // circles
      svg.selectAll("circle")
        .data(data)
        .enter().append("svg:circle")
        .attr("r", radius)
        .attr("cx", function (d) { return x(d.letter); })
        .attr("cy", function (d) { return y(d.frequency); })
        .on("click", function (d, i) {
          console.log(d, i);
          console.log(d3.select(this).attr("cx"));
          d3.select(this).transition().delay(250).attr("cy", function (d) { d.amount -= 5000; return y(amountFn(d)) }).style("fill", "purple");
        })
        .on("mouseover", function (d, i) {
          console.log(d3.select(data[i]));
          d3.select(this).style("fill", "red");
        })
        .on("mouseout", function (d, i) {
          //d3.selectAll("circle").style("fill", "teal");
        })
        //  .on("dragstart", function(d, i) {
        //    console.log('dragging', d, i);
        //  })
        // .call(drag);

      d3.select("#sort").on("change", change);

      addLegend(svg);

      function addLegend(svg) {


        // d3 add legends
        svg.selectAll(".bar")
          .data([["Z", .9]])
          .enter().append("rect")
          .attr("x", function (d) { console.log(d); })
          .attr("y", function (d) { console.log(d); return y(d); })
          .attr("class", "bar")
          .attr("width", x.rangeBand())
          .attr("height", 40)
      }

      var sortTimeout = setTimeout(function () {
        d3.select("#sort").property("checked", true).each(change);
      }, 6000);

      function change() {
        clearTimeout(sortTimeout);

        // Copy-on-write since tweens are evaluated after a delay.
        var x0 = x.domain(data.sort(this.checked
          ? function (a, b) { return b.frequency - a.frequency; }
          : function (a, b) { return d3.ascending(a.letter, b.letter); })
          .map(function (d) { return d.letter; }))
          .copy();

        var transition = svg.transition().duration(750),
          delay = function (d, i) { return i * 50; };


        // bar
        transition.selectAll(".bar")
          .delay(delay)
          .attr("x", function (d) { return x0(d.letter); });

        // line
        transition.selectAll(".line")
          .delay(delay)
          .attr("x1", function (d) { return x0(d.letter); })
          .attr("stroke", "#22ff88");

        // line 2
        transition.selectAll(".secondLine")
          .delay(delay)
          .attr("x1", function (d) { return x0(d.letter); })
          .attr("x2", function (d) { return x0(d.letter) * 2; })
          .attr("stroke", "#0088ff");



        transition.select(".x.axis")
          .call(xAxis)
          .selectAll("g")
          .delay(delay);
      }
    });
  }
}

export default SortableBarChartController;
