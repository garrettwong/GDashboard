export default class FruitsService {
  constructor(JsonFileDatabase) {
      this.jsonFileDatabase = JsonFileDatabase;
  }

  static getClassName() { return 'FruitsService'; }
  getClassName() { return FruitsService.getClassName(); }

  getAll() {
    return this.jsonFileDatabase.getAll('fruits');
  }

  
}
