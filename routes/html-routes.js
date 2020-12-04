
var db = require("../models");
var passport = require("../config/passport");
// Requiring our custom middleware for checking if a user is logged in
const authenticate = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.render("index");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("login")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/signup", (req, res) => {

    res.render("signup")
  });

  app.get("/userposts", (req, res) => {
    db.Posts.findAll({}).then((dbPost) => {
      console.log(dbPost)
      // We have access to the todos as an argument inside of the callback function
      res.render("userposts", { Posts: dbPost })
    })
      .catch(function (err) {
        console.log(err);
      });


  });
  app.get("/allUsers", (req, res) => {
    db.User.findAll({}).then((dbUser) => {
      // We have access to the todos as an argument inside of the callback function
      res.render("allUsers", {User: dbUser})
  })
      .catch(function (err) {
          console.log(err);
      });
  });

  app.get("/profile",
    // passport.authenticate("local"),
    (req, res) => {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.render("profile", {
          user_name: req.user.user_name,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          biography: req.user.biography
        });
      }




    });
  app.get("/addpost", (req, res) => {

    res.render("addPost")
  });


  

  
app.get("/userposts/:id", function (req, res) {
  // findAll returns all entries for a table when used with no options
 db.Posts.findAll({
     where:{
         id:req.params.id
     }
 }).then((dbPost) => {
      // We have access to the todos as an argument inside of the callback function
      res.render("userposts", { Posts: dbPost })
  }) 
      .catch(function (err) {
          console.log(err);
      });
});


}

