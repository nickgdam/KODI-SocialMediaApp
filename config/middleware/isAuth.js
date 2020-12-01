// restricts the user from viewing routes before bieng logged in.  
module.exports = function(req, res, next) {
    // If the user is logged in continue with all routes
    if (req.user) {
      return next();
    }
  
    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/");
  };