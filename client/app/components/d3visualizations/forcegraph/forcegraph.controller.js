import * as d3 from 'd3';
import { event as currentEvent } from 'd3';

class ForcegraphController {
  constructor($uibModal) {
    this.config = {
      radius: 10,

      useImages: true,

      imageDefaults: {
        width: '64px',
        height: '64px'
      }
    };

    this.$uibModal = $uibModal;

    this.init();
  }

  init() {
    // set radius to default, 10
    var radius = this.config.radius;

    // https://bl.ocks.org/mbostock/4600693
    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    // clear all elements
    svg.selectAll("*").remove()

    // set color
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().distance(10).strength(0.5))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    console.log(this.simulation);

    let self = this;  // create reference to this

    // get data from miserables
    d3.json("./miserables.json", function (error, graph) {
      console.log(graph);

      if (error) throw error;

      var nodes = graph.nodes,
        nodeById = d3.map(nodes, function (d) { return d.id; }),
        links = graph.links,
        bilinks = [];

      links.forEach(function (link) {
        var s = link.source = nodeById.get(link.source),
          t = link.target = nodeById.get(link.target),
          i = {}; // intermediate node
        nodes.push(i);
        links.push({ source: s, target: i }, { source: i, target: t });
        bilinks.push([s, i, t]);
      });

      var link = svg.selectAll(".link")
        .data(bilinks)
        .enter().append("path")
        .attr("class", "link");

      var node = self.getNodes(svg, nodes, color);


      node.append("title")
        .text(function (d) { return d.id; });

      self.simulation
        .nodes(nodes)
        .on("tick", ticked);

      self.simulation.force("link")
        .links(links);

      function ticked() {
        link.attr("d", positionLink);
        node.attr("transform", positionNode);
      }
    });

    function positionLink(d) {
      return "M" + d[0].x + "," + d[0].y
        + "S" + d[1].x + "," + d[1].y
        + " " + d[2].x + "," + d[2].y;
    }

    function positionNode(d) {
      return "translate(" + d.x + "," + d.y + ")";
    }
  }

  update() {
    this.init();
  }

  getNodes(svg, nodes, color) {
    let self = this;

    if (this.config.useImages) {
      let node = svg.selectAll(".node")
        .data(nodes.filter(function (d) { return d.id; }))
        .enter()
        .append('svg:image')
        .attr('xlink:href', (d, i) => {
          console.log(d, i);
          let groupNum = 1 + ((parseInt(d.group) * i) % 30);
          return `images/forcegraph/${groupNum}.jpg`;
        })
        .attr('x', '-8px')
        .attr('y', '-8px')
        .attr('width', this.config.imageDefaults.width)
        .attr('height', this.config.imageDefaults.height)

        .attr("class", "node")
        .attr("r", this.config.radius)
        .attr("fill", function (d) { return color(d.group); });
      node
        .call(d3.drag()
          .on("start", this.dragstarted.bind(this))
          .on("drag", this.dragged.bind(this))
          .on("end", this.dragended.bind(this)));
      node
        .on('click', function () {
          d3.select(this).transition()
            .attr('width', '68px')
            .attr('height', '68px')
            .attr('x', '-120px')
            .attr('y', '-120px');

          let imgUrl = d3.select(this).attr('xlink:href');
          self.openComponentModal(imgUrl);
        });

      return node;
    } else {
      let node = svg.selectAll(".node")
        .data(nodes.filter(function (d) { return d.id; }))
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", this.config.radius)
        .attr("fill", function (d) { return color(d.group); });

      node
        .call(d3.drag()
          .on("start", this.dragstarted.bind(this))
          .on("drag", this.dragged.bind(this))
          .on("end", this.dragended.bind(this)));

      node
        .on('click', function () {
          d3.select(this).transition()
            .attr('r', '75px');
        });
      return node;
    }
  }

  openComponentModal(ref) {
    console.log(this);

    var modalInstance = this.$uibModal.open({
      animation: true,
      component: 'modalComponent',
      windowClass: 'modal-max-width',
      resolve: {
        items: function () {
          return ref;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      let a = selectedItem
    }, function () {

    });
  }

  dragstarted(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x, d.fy = d.y;
  }

  dragged(d) {
    d.fx = d3.event.x, d.fy = d3.event.y;
  }

  dragended(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null, d.fy = null;
  }
}

export default ForcegraphController;
