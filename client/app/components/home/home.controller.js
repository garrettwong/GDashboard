class HomeController {
  constructor(JsonFileDatabase) {
    JsonFileDatabase.getAll('fruits').then((response) => {
      console.log('fruits received', response.data);
    });

    JsonFileDatabase.get('fruits', 1).then((response) => {
      console.log('fruit received', response.data);
    });
    
    JsonFileDatabase.post('fruits', { name: 'Jackfruit' }).then((response) => {
      console.log('fruit added', response.data);
    });

    JsonFileDatabase.put('fruits', 5, { id: 5, name: 'Pineapple' }).then((response) => {
      console.log('fruit updated', response.data);
    });
    JsonFileDatabase.remove('fruits', 1).then((response) => {
      console.log('fruit deleted', response.data);
    });
  }
}

export default HomeController;
