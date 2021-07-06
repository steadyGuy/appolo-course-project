import { IUser } from '../../models/UserModel';

class User {
  public Model: any;

  constructor(model: any) {
    this.Model = model;
  }

  async signIn({ email, password }: any, authenticate: any) {
    try {
      const user: IUser = await authenticate({ email, password });
      return user;
    } catch (err) {
      return err;
    }

  }

  async signUp(userData: any) {

    if (userData.password !== userData.passwordConfirmation) {
      throw new Error('Пароли не совпадают');
    }

    return this.Model.create(userData);
  }

  signOut(ctx: any) {
    try {
      // console.log('BEFORE LOGOUT-----------');
      // console.log('is authenticated', ctx.isAuthenticated())
      ctx.logout();
      // console.log('AFTER LOGOUT-----------');
      // console.log('is authenticated', ctx.isAuthenticated())
      return true;
    } catch (err) {
      return false;
    }
  }

}

export default User;