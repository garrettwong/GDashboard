class TilesController {
  constructor() {

    if (!this.tiles) {
      this.tiles = [
        {
          value: '14',
          name: 'Members in WS',
          desc: 'Number in Web Solutions',
          icon: 'fa-user'
        },
        {
          value: '78%',
          name: 'Reusability Score',
          desc: 'Measured by Estimated Release Date',
          icon: 'fa fa-star'
        },
        {
          value: '2.74/10.0',
          name: 'Feature Set',
          desc: 'Computed by the amount of reusable code',
          icon: 'fa-percent'
        },
        // {
        //   value: '128%',
        //   name: 'Storage Efficiency',
        //   desc: 'Measured by Storage\n',
        //   icon: 'fa-comments-o'
        // }
      ];

      this.tileColumnClasses = this.getTileColumnClasses(this.tiles);

    } else {
      // this.tiles was already defined

    }
  }

  getTileColumnClasses(tiles) {
    switch(tiles.length) {
      case 1:
        return 'col-lg-12 col-md-12 col-sm-12 col-xs-12';
      case 2:
        return 'col-lg-6 col-md-6 col-sm-12 col-xs-12';
      case 3: 
        return 'col-lg-4 col-md-4 col-sm-12 col-xs-12';
      case 4:
        return 'col-lg-3 col-md-3 col-sm-6 col-xs-12';
    }
  }
}

export default TilesController;
