<<<<<<< HEAD
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));
=======
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // the user will need to sign in with a username
    {
      usernameField: "username",
    },
    (username, password, done) => {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          username: username
        }
      }).then(dbUser => {
        // If there's no user with the given username
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect Username."
          });
        }
        // if the username is correct but the password is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        console.log(dbUser);
        return done(null, dbUser);
      });
    }
  )
);
>>>>>>> 802eafa45aac4e18e21982caadb94bb8f1ae5cc2

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
<<<<<<< HEAD
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
=======
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
>>>>>>> 802eafa45aac4e18e21982caadb94bb8f1ae5cc2
  cb(null, obj);
});

// Exporting our configured passport
<<<<<<< HEAD
module.exports = passport;
=======
module.exports = passport;
>>>>>>> 802eafa45aac4e18e21982caadb94bb8f1ae5cc2
