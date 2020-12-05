// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// ============================================================
var db = require("../models");
const passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/api/users", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.User.findAll({}).then(function (dbUser) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbUser);
        })
            .catch(function (err) {
                console.log(err);
            });
    });

    app.get("/api/userposts", function (req, res) {
        // findAll returns all entries for a table when used with no options
       db.Post.findAll({}).then((dbPost) => {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbPost);
        }) 
            .catch(function (err) {
                console.log(err);
            });
    });

    // POST route for saving a new todo
    app.post("/api/addPost", function (req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Posts.create({
            post_name: req.body.title,
            post_content: req.body.body,
            post_tags: req.body.post_tags
        }).then(function (social_db) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(social_db);
        });
    });


    app.post("/api/login", passport.authenticate("local"), function(req, res) {

        console.log("login api");
        res.render("profile");
    });


    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            user_name: req.body.username,
            password: req.body.password
        }).then(function (social_db) {
            // We have access to the new todo as an argument inside of the callback function
            res.render("login",);
        });
    });
    
    app.post("/api/login", passport.authenticate("local"), (req, res) => {       
      let userData = {
          user_name: req.User.datavalues.username,
          password: req.User.datavalues.password
      }
      res.json(userData)
       
        
    });

    app.post("/api/profile:user")

    // DELETE route for deleting todos. We can get the id of the todo we want to delete from
    // req.params.id
    app.delete("/api/todos/:id", function (req, res) {

    });

    // PUT route for updating todos. We can get the updated todo from req.body
    app.put("/api/todos", function (req, res) {

    });
};