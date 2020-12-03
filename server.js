// var express = require("express");


// var PORT = process.env.PORT || 8080;
// var db = require('./models')
// var app = express();

// // serve static content for the app from the "public" directory in the application directory
// app.use(express.static("views"));

// // parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // set handlebars
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // import routes and give the server access to them
// const routes = require("./controllers/post_controller.js")
// // const routes = require("./routes/api-routes")


// app.use(routes);
// // start our server so it can begin listening to client requests
// db.sequelize.sync().then(() => {
//     app.listen(PORT, function() {
//         // log (server-side) when our server has started
//         console.log("server listening on: http://localhost:" + PORT);
//     });
    
// })
// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const exphbs = require("express-handlebars");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// const router = require("./controllers/post_controller")
// app.use(router)

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
