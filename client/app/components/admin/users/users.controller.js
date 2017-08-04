class UsersController {
  /*
   * rows = [{
        fullName: 'Garrett Wong',
        email: 'Garrett.Wong@garrettwong.com',
        phone: '949-407-2304',
        age: 28,
        id: 1,
        imageUrl: '',
        imageBytes: ''
      }];
  */
  constructor(JsonFileDatabase) {
    this.name = 'users';

    this.users = {
      headers: ['Full Name', 'Email', 'Phone', 'Age', 'ID', 'imageUrl', 'imageBytes'],
      rows: []
    }

    this.jsonFileDatabase = JsonFileDatabase;

    this.getAll();

    this.initCanvasGetBytes();
  }

  /*
   *  @function getAll()
   *  @description 
   */
  getAll() {
    this.jsonFileDatabase.getAll(this.name).then((response) => {
      console.log('get all', response.data);

      response.data.forEach((data, index) => {
        this.users.rows.push(data);
      });
    }, (error) => {
      console.log(error);
    });
  }

  addNew(obj) {
    console.log(obj);

    this.jsonFileDatabase.post(this.name, obj).then((response) => {
      console.log('successfully added object', response.data);

      this.users.rows.push(obj);
    });
  }

  tests() {
    this.jsonFileDatabase.get(this.name, 1).then((response) => {
      console.log('fruit received', response.data);
    });

    this.jsonFileDatabase.put(this.name, 5, { id: 5, fullName: 'Garrett Wong2' }).then((response) => {
      console.log('fruit updated', response.data);
    });

    this.jsonFileDatabase.remove(this.name, 1).then((response) => {
      console.log('fruit deleted', response.data);
    });
  }

  getBytes() {
    var myImage = document.getElementById('myimage');
    var myCanvas = document.getElementById('mycanvas');

    console.log(myCanvas);
    var ctx = myCanvas.getContext('2d');

    ctx.drawImage(myImage, 0, 0);

    var mydataURL = myCanvas.toDataURL('image/jpg');

    console.log(mydataURL);
  }

  initCanvasGetBytes() {
    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');

    function handleImage(e) {
      var reader = new FileReader();
      reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
        console.log('bytes', event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }

  }
}

export default UsersController;
