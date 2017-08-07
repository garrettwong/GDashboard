class StateService {
  constructor($http) {
    this.$http = $http;
  }
  
  static getClassName() { return 'StateService'; }
  getClassName() { return StateService.getClassName(); }


  getStates() {
    let url = './states.json';

    return this.$http({
      method: 'GET',
      url: url
    });
  }
  
}

export default StateService;
