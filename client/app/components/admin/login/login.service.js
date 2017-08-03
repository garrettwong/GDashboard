class LoginService {
  constructor($http) {
    this.$http = $http;
  }
  
  static getClassName() { return 'LoginService'; }
  getClassName() { return LoginService.getClassName(); }


  validateUserPass(username, password, redirectUri) {
    let url = '/api/login/validate';

    return this.$http.post(url, { 
      username: username, 
      password: password,
      redirectUri: redirectUri || window.location.href
    });
  }
}

export default LoginService;
