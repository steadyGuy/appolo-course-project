import express from 'express';
import UserModel, { IUser } from '../../models/UserModel';
import { Strategy } from 'passport-strategy';
import { IInformativeObject } from '../../interfaces';

// Strategy get options (email, password) needed to authenticate user
// Strategy gets a callback function that will contain functionality to verify an user
// Strategy has to have "authanticate" function
// Strategy has access to "error", "fail" and "success" functions
class GraphqlStrategy extends Strategy {

  private verify;
  public name: string;

  constructor(verify: any) {
    super();
    if (!verify) {
      throw new Error('Graphql strategy requires a verify callback');
    }

    this.verify = verify;
    this.name = 'graphql';
  }

  async authenticate(_: express.Request, options: any) {
    console.log('Calling authenticate in strategy');

    const done = (err: any, user: IUser, info: IInformativeObject) => {

      if (err) {
        return this.error(err);
      }

      if (!user) {
        return this.fail(info, 401);
      }

      return this.success(user, info);
    }

    await this.verify(options, done);
  }

}

export default new GraphqlStrategy(async ({ email, password }: any, done: any) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'There are not such a user' });
    }

    const isValidPassword = await user.validatePassword(password);
    console.log(isValidPassword)
    if (!isValidPassword) {
      return done(null, false, { message: 'Неверный пароль' })
    }

    //TODO: Check user password if it's matching password from options
    return done(null, user);
  } catch (err) {
    done(err);
  }
});