import { Request } from 'express';
import { IUser } from '../../models/UserModel';
import passport from '../../libs/passport';
import { IInformativeObject } from '../../interfaces';

const authenticateUser = (req: Request, options: { email: string, password: string }) => {

  return new Promise((resolve, reject) => {
    const authFn = passport.authenticate('graphql', options as any, (err: any, user: IUser, info: IInformativeObject) => {
      if (err) {
        reject(new Error(err));
      }
      if (user) {
        req.login(user, (err) => {
          if (err) {
            return reject(err);
          }
          return resolve(user);
        });
      } else {
        return reject(new Error(info.message));
      }
    });
    authFn();
  });

}

export const buildAuthContext = (req: Request) => {
  const auth = {
    authenticate(options: any) {
      return authenticateUser(req, options);
    },
    logout() { return req.logout(); },
    isAuthenticated() { return req.isAuthenticated(); },
    getUser() { return req.user }
  };

  return auth;
}