class UsersController {
  /*
   * rows = [{
        fullName: 'Garrett Wong',
        email: 'Garrett.Wong@garrettwong.com',
        phone: '949-407-2304',
        age: 28
      }];
  */
  constructor(JsonFileDatabase) {
    this.name = 'users';

    this.users = {
      headers: ['Full Name', 'Email', 'Phone', 'Age', 'ID'],
      rows: []
    }

    this.jsonFileDatabase = JsonFileDatabase;

    this.getAll();
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
}

export default UsersController;
