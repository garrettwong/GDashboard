class RegisterNewUserController {
  constructor(SweetAlertService, RegisterNewUserService) {
    this.name = 'registerNewUser';
    this.sweetAlertService = SweetAlertService;
    this.registerNewUserService = RegisterNewUserService;
  }

  registerUser(isValid) {
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

export default RegisterNewUserController;
