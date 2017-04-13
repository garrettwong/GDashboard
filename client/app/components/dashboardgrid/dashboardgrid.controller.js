class DashboardgridController {
  constructor() {
    this.name = 'dashboardgrid';

    this.tiles = [
      {
        faIcon: 'fa-key',
        title: 'Keys',
        count: '1,475',
        changePercent: 23.24
      },
      {
        faIcon: 'fa-clock-o',
        title: 'Clocks',
        count: '25',
        changePercent: 3.2
      },
      {
        faIcon: 'fa-users',
        title: 'Users',
        count: '3,475',
        changePercent: 71.4
      },
      {
        faIcon: 'fa-user',
        title: 'Users',
        count: '2102',
        changePercent: 49
      },
      {
        faIcon: 'fa-user',
        title: 'Users',
        count: '2102',
        changePercent: 49
      },
      {
        faIcon: 'fa-user',
        title: 'Users',
        count: '2102',
        changePercent: 49
      },
    ];
  }

  /*
   * @function createTile
   * @description creates a tile object
   * @param faIcon - a font awesome icon name 'fa-user'
   * @param title - title of the tile
   * @param count - the value to display
   * @param changePercent - the percentage change from last week (must be computed before)
   * @returns a json object { faIcon, title, count, changePercent }
   */
  createTile(faIcon, title, count, changePercent) {
    return { 
      faIcon: faIcon,
      title: title,
      count: count,
      changePercent: changePercent
    };
  }
}

export default DashboardgridController;
