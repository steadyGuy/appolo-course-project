class User {
  public Model: any;

  constructor(model: any) {
    this.Model = model;
  }

  signIn() {
    return 'Sign in...';
  }

  async signUp(userData: any) {

    if (userData.password !== userData.passwordConfirmation) {
      throw new Error('Пароли не совпадают');
    }

    return this.Model.create(userData);
  }

  signOut() {
    return 'Sign Out...';
  }

}

export default User;