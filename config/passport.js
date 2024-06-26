const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");
require("dotenv").config();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

// set up strat
// async //
const strategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await User.findOne({ _id: payload.sub });

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
});

// Promise Based //
// const strategy = new JwtStrategy(options, (payload, done) => {
//   // get user ID from JWT Payload -> payload.subject
//   User.findOne({ _id: payload.sub })
//     .then((user) => {
//       if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     })
//     .catch((err) => done(err, null));
// });

// make passport use strategy
passport.use(strategy);

module.exports = passport;
