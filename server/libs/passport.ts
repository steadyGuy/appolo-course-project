import UserModel from '../models/UserModel';
import passport from 'passport';
import graphqlStrategy from './strategies/graphqlStrategy';

passport.use(graphqlStrategy);
// TODO: realize .d.ts file with IUser extends Express.User
passport.serializeUser((user: any, done) => {
  done(null, user.id)
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;