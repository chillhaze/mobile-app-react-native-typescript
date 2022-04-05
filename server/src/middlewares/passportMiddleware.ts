import config from "config";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User";

const opts = {};
opts.secretOrKey = config.get("jwtSecret");
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = (passport) => {
  passport.use(
    new Strategy(opts, function (jwt_payload, done) {
      User.findOne({ id: jwt_payload.id }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(undefined, user);
        } else {
          return done(undefined, false);
        }
      });
    }),
  );
};
