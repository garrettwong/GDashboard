class TimezoneStateSelectController {
  constructor(StateService) {
    this.name = 'timezoneStateSelect';
    this.stateService = StateService;


    this.stateService.getStates().then((response) => {
      console.log(response);

      this.stateTimezoneGroups = this.transformStates(response.data);


    }, (error) => {
      console.log(error);
    });
  }

  transformStates(states) {
    // represents the states per group
    let stateTimezoneGroupsMap = {};

    // iterate through all states and assign via group
    states.forEach((state) => {
      stateTimezoneGroupsMap[state.timezone] = stateTimezoneGroupsMap[state.timezone] || [];
      stateTimezoneGroupsMap[state.timezone].push(state);
    });

    return stateTimezoneGroupsMap;
  }
}

export default TimezoneStateSelectController;
