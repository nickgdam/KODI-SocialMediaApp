

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

    res.render("userPosts")
  });

  app.get("/profile", passport.authenticate("local"), (req, res) => {

    res.render("profile")
  });
  app.get("/addpost", (req, res) => {

    res.render("addPost")
  });


}
