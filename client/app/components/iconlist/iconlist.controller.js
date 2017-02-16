class IconlistController {
  constructor() {
    this.name = 'iconlist';

    console.log(this);

    this.a = 'haasdf';
  }

  setSelected(listElement) {
    console.log(listElement, this.onClick);
    this.selectedListData = listElement;

    this.onClick({ a: this.selectedListData });
  }
}

export default IconlistController;
