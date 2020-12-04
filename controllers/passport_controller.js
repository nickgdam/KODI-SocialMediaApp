const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", function(req, res) {
    if(req.user) {
        res.render("index");
    }
    res.render("signup");
});

router.post("/api/signup", function(req, res) {
    db.User.create({
        userName: req.body.userName,
        password: req.body.password
    }).then(function() {
        res.redirect(307, "/api/login");
    }).catch(function(err) {
        res.status(401).json(err);
    });
});

module.exports = router