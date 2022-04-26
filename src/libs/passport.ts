import passport from 'passport';
import passportJwt from 'passport-jwt';
import { User } from '../models/user.model';
import config from './config';

passport.use(
  new passportJwt.Strategy(
    {
      jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.sub);
        if (user) {
          return done(undefined, user);
        }
        return done(undefined, false);
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);
