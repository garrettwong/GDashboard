class LoginController {
  constructor(SweetAlertService, LoginService, RegisterNewUserService) {
    this.name = 'login';
    this.sweetAlertService = SweetAlertService;
    this.loginService = LoginService;
    this.registerNewUserService = RegisterNewUserService;
  }

  // method to login a user
  login() {
    this.loginService.validateUserPass(this.username, this.password)
      .then((response) => {
        console.log('success', response);

        this.sweetAlertService.swal(response, response, 'success');
      },
      (error) => {
        console.log('error', error);

        this.sweetAlertService.swal(`${error.status}: ${error.statusText}`, error.data, 'error');
      });
  }


  // method to create a new user
  registerNewUser(isValid) {
    if (!isValid) {
      this.sweetAlertService.swal('Error', 'Please fill out all required fields', 'info');
      return;
    }

    let user = this.registerNewUserService.createUserObject(this.username, this.password, this.firstName, this.lastName, this.email);

    this.registerNewUserService.registerUser(user)
      .then((response) => {
        console.log('success', response);

        this.sweetAlertService.swal(response, response, 'success');
      },
      (error) => {
        console.log('error', error);

        this.sweetAlertService.swal(`${error.status}: ${error.statusText}`, error.data, 'error');
      });
  }



}

export default LoginController;
