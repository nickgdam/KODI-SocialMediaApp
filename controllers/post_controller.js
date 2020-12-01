var express = require("express");
var create = require("express-handlebars")


var router = express.Router();

// Import the model (cat.js) to use its database functions.
var post = require("../models/post.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    //   post.Post.All(function(data) {
    //     var hbsObject = {
    //       post: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    //   });
    res.render("index")
});

router.get("/signup", function (req, res) {

    res.render("signup")
});

router.get("/login", function (req, res) {

    res.render("login")
});

router.get("/profile", function (req, res) {

    res.render("profile")
});


router.post("/api/post", function (req, res) {
    post.Post.create(["post_name", "post_content", "post_tags", "user_id"], [req.body.post_name, req.body.post_content, req.body.post_tags, req.body.user.id], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
        res.render("userPosts")
    });
});

router.put("/api/post/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    post.Post.update(
        {
            post_name: req.body.post_name,
            post_content: req.body.post_content,
            post_tags: req.body.post_tags,
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;
