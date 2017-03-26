class IconlistController {


  /*
   * @function constructor
   * @description
   * @param listData - a list of objects {color, value, sales, category, title}
   */
  constructor() {
    this.name = 'iconlist';

    console.log(this);

    this.listData = [
      { 
        color: 'red', value: 100, sales: 2000, category: 'now', title: 'bryan'
      },
      { 
        color: 'blue', value: 100, sales: 2000, category: 'now', title: 'jackson'
      },
      { 
        color: 'green', value: 100, sales: 2000, category: 'now', title: 'eric'
      },
      { 
        color: 'yellow', value: 100, sales: 2000, category: 'now', title: 'title'
      },
      { 
        color: 'purple', value: 100, sales: 2000, category: 'now', title: 'title'
      },
    ]

    this.a = 'haasdf';
  }

  setSelected(listElement) {
    console.log(listElement, this.onClick);
    this.selectedListData = listElement;

    this.onClick({ 
      a: this.selectedListData 
    });
  }
}

export default IconlistController;
