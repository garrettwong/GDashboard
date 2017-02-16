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
        this.datasetOverride = [{ yAxisID: 'y-axis-1' }, 
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

    chartToggle() {
        this.chartType = (this.chartType === 'chart-line' ? 'chart-bar' : 'chart-line');
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

    refresh() {
        console.log('refreshing', this.graphData);

        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                if (this.data[i][j] > 0) {
                    this.data[i][j] -= 10;
                } else {
                    this.data[i][j] += 10;
                }
            }
        }
    }

    update() {
        if (!angular.equals(this.data, this.graphData)) {
            this.data = this.graphData;
        }
    }
}

export default DynamicgraphController;
