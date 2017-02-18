class DynamicgraphController {
    constructor($scope) {
        this.labels = ["January", "February", "March", "April", "May", "June", "July"];
        this.series = ['Series A', 'Series B'];
        this.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, -40, 19, 86, 27, 90]
        ];

        this.colors = ['#45b7cd', '#ff6384', '#ff8e72'];
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
        console.log('$onChanges', val);
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

        var n = this.data.length;
        var sumX = 0;
        var sumY = 0;
        var sumXY = 0;
        var sumXSquared = 0;
        var sumYSquared = 0;
        this.data[0].forEach((d, i) => {
            if (isNaN(d)) d = 0;

            sumX += i;
            sumY += parseInt(d);
            sumXY += (parseInt(d)*i);
            sumXSquared += (i*i);
            sumYSquared += (parseInt(d)*parseInt(d));
        });

        console.log(n, sumX, sumY, sumXY, sumXSquared, sumYSquared);
        
        var a = ((sumY*sumXSquared) - (sumX*sumXY)) / ((n*sumXSquared) - (sumXSquared*sumXSquared));
        var b = ((sumXY) - (sumX*sumY)) / ((n*sumXSquared) - (sumXSquared*sumXSquared));
        console.log('line of regression', a, b); // y=a+bx

        function formula(a,b,x) {
            return a + b*x;
        }

        // generate random set of 7 points
        let arr = [];
        for(let i = 0; i < this.data[0].length; i++) {
            arr.push(formula(a,b,i));
        }
        this.data.push(arr);

        this.update();
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
}

export default DynamicgraphController;
