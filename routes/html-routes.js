
var db = require("../models");
var passport = require("../config/passport");
// Requiring our custom middleware for checking if a user is logged in
const authenticate = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("index")
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
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


  app.get("/userpost", (req, res) => {

    res.render("userPosts", {
      user: res.user_name,
      title: res.post_title

    });
  });

  app.get("/profile",
   passport.authenticate("local"),
    (req, res) => {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          user: req.user.username,
          password: req.user.password
        });
      }
  

    

  });
  app.get("/addpost", (req, res) => {

    res.render("addPost")
  });


  app.get("/userposts", (req, res) => {
    db.Posts.findAll({}).then((dbPost) => {
      console.log(dbPost)
      // We have access to the todos as an argument inside of the callback function
      res.render("userposts", {Posts: dbPost})
  }) 
      .catch(function (err) {
          console.log(err);
      });

    
  });

}
