import * as d3 from 'd3';

class BranchedrandomwalkController {
  constructor() {
    this.canvas = document.querySelector("canvas"),
      this.context = this.canvas.getContext("2d"),
      this.width = this.canvas.width,
      this.height = this.canvas.height,
      this.color = d3.scaleSequential(d3.interpolateRainbow).domain([0, 1000]),
      this.randomX = d3.randomNormal(0.3),
      this.randomY = d3.randomNormal(0);

    this.render();

    this.canvas.onclick = this.render.bind(this);
  }

  render() {
    var x0 = this.width / 20,
      y0 = this.height / 2,
      mainWalk = this.randomWalk(x0, y0, 1000);

    this.context.clearRect(0, 0, this.width, this.height);
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.lineWidth = 1.5;
    this.context.strokeStyle = "black";
    this.renderWalk(mainWalk);

    this.context.globalCompositeOperation = "multiply";
    this.context.lineWidth = 1;
    
    for (var i = 0; i < mainWalk.length; i += 2) {
      var branchStart = mainWalk[i],
        x0 = branchStart[0],
        y0 = branchStart[1];

      for (var j = 0; j < 1; ++j) {
        this.context.strokeStyle = this.color(i + (Math.random() - 0.5) * 50);
        var x1 = x0, y1 = y0;
        for (var k = 0, m = 20; k < m; ++k) {
          this.context.globalAlpha = (m - k - 1) / m;
          var pieceWalk = this.randomWalk(x1, y1, 10),
            pieceEnd = pieceWalk[pieceWalk.length - 1];
          this.renderWalk(pieceWalk);
          x1 = pieceEnd[0];
          y1 = pieceEnd[1];
        }
        this.context.globalAlpha = 1;
      }
    }
  }

  renderWalk(walk) {
    var i, n = walk.length;
    this.context.beginPath();
    this.context.moveTo(walk[0][0], walk[0][1]);
    for (i = 1; i < n; ++i) {
      this.context.lineTo(walk[i][0], walk[i][1]);
    }
    this.context.stroke();
  }

  randomWalk(x0, y0, n) {
    this.points = new Array(n);
    this.points[0] = [x0, y0];
    for (let i = 1; i < n; ++i) {
      this.points[i] = [
        x0 += this.randomX() * 2,
        y0 += this.randomY() * 2
      ];
    }
    return this.points;
  }
}

export default BranchedrandomwalkController;
