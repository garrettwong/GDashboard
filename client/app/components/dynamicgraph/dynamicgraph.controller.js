class DynamicgraphController {
    constructor($scope) {
        this.labels = ["January", "February", "March", "April", "May", "June", "July"];
        this.series = this.series || ['Series A', 'Series B'];
        this.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, -40, 19, 86, 27, 90]
        ];

        this.colors = ['#337ab7', '#d9534f', '#ff8e72'];
        this.chartType = 'chart-line'; //'chart-bar';
        this.datasetOverride = [
            { 
                yAxisID: 'y-axis-1'
            }, 
            { 
                yAxisID: 'y-axis-2',
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                type: 'line' 
            }
        ];

        this.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ],
                xAxes: [
                    {
                        //http://www.chartjs.org/docs/#scales
                        // ticks: {
                        //     autoSkip: false
                        // }
                    }
                ]
            },
        };

        this.name = 'dynamicgraph';
    }

    $doCheck() {
        // let's update graphData
        this.update();
    }

    $onChanges(val) {
        // console.log('$onChanges', val);
    }

    onClick(points, evt) {
        console.log(points, evt);
    };


    /*
     * @function modify()
     * @description silly function to reduce the range of the graph by subtraction
     */
    modify() {
        console.log('refreshing', this.graphData);

        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                if (this.data[i][j] > 0) {
                    this.data[i][j] -= 5;
                } else {
                    this.data[i][j] += 10;
                }
            }
        }
    }

    /*
     * @function addLine()
     * @description adds a line to the graph (linear regression)
     * http://www.statisticshowto.com/how-to-find-a-linear-regression-equation/
     */
    addLine() {
        console.log(this.data, this.graphData);

        // http://www.statisticshowto.com/how-to-find-a-linear-regression-equation/

        // sanitize input
        this.data[0] = this.data[0].map((d,i) => {
            if (isNaN(d)) return 0;
            
            return d;
        });

        // map to [{x: x, y: y}]
        var inputArrKvp = this.data[0].map((d,i) => {
            return {
                x: i,
                y: d
            };
        });
        
        let formula = this.getLineOfRegressionFormula(inputArrKvp);

        // generate random set of length points
        let arr = [];
        for(let i = 0; i < this.data[0].length; i++) {
            arr.push(formula(i));
        }
        this.data.push(arr);

        this.update();



        // line of regression working to get formula
        var inputArr = [
            { x: 43, y: 99},
            { x: 21, y: 65},
            { x: 25, y: 79},
            { x: 42, y: 75},
            { x: 57, y: 87},
            { x: 59, y: 81}
        ];
        let f = this.getLineOfRegressionFormula(inputArr);
    }

    /*
     * @function addLine()
     * @description adds a random line to the graph 
     */
    addRandomLine() {
        console.log(this.data, this.graphData);

        // generate random set of 7 points
        let arr = [];
        for(let i = 0; i < 7; i++) {
            arr.push(
                Math.ceil(
                    Math.random() * 100));
        }
        this.data.push(arr);

        this.update();

    }

    /*
     * @function chartToggle()
     * @description toggles chart between line and bar
     */
    chartToggle() {
        this.chartType = (this.chartType === 'chart-line' ? 'chart-bar' : 'chart-line');
    }

    /*
     * @function update()
     * @description sets data to graphData
     */
    update() {
        if (!angular.equals(this.data, this.graphData)) {
            this.data = this.graphData;
        }
    }

    /*
     * @function getLineOfRegressionFormula
     * @description returns the formula for line of regression given an input set
     * @param array of objects with x and y properties [{x:1, y:10}, {x:2, y:20}]
     */
    getLineOfRegressionFormula(inputArr) {
        var tableOfValues = {};

        for(var i = 0; i < inputArr.length; i++) {
            var cur = inputArr[i];

            var row = {};
            row.x = cur.x;
            row.y = cur.y;
            row.xy = cur.x*cur.y;
            row.xSquared = cur.x*cur.x;
            row.ySquared = cur.y*cur.y;
            
            tableOfValues[i+1] = row;
        }

        // compute summations
        var summations = {x: 0, y: 0, xy: 0, xSquared: 0, ySquared: 0};

        for(var key in tableOfValues) {
            var curRow = tableOfValues[key];
            
            summations.x += curRow.x;
            summations.y += curRow.y;
            summations.xy += curRow.xy;
            summations.xSquared += curRow.xSquared;
            summations.ySquared += curRow.ySquared;
        }

        console.log(tableOfValues, summations);

        // find a and b
        var a = ((summations.y * summations.xSquared) - (summations.x * summations.xy)) /  
            ((inputArr.length*summations.xSquared) - (summations.x*summations.x));
        var b = ((inputArr.length*summations.xy)-(summations.x*summations.y)) /
            ((inputArr.length*summations.xSquared) - (summations.x*summations.x));
        
        console.log(a,b);

        return function(x) {
            return a + b*x;
        };
    }
}

export default DynamicgraphController;
