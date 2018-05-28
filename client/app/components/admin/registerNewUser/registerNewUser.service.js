class RegisterNewUserService {
  constructor($http) {
    this.$http = $http;
  }
  
  static getClassName() { return 'RegisterNewUserService'; }
  getClassName() { return RegisterNewUserService.getClassName(); }

  createUserObject(username, password, firstname, lastname, email) {
    return {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email
    };
  }

  // user: {}
  registerUser(user) {
    let url = 'http://localhost:3001/api/People';

    console.log(user);

    return this.$http.post(url, user);
  }
}

export default RegisterNewUserService;
