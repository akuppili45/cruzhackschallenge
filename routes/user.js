const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", function(req, res, next) {
  User.find({})
    .then(user => res.send(user))
    .catch(err => next(err));
});

router.get("/:id", function(req, res, next){
    User.findById(req.params.id).then(user => res.send(user)).catch(err=>next(err));
});

router.post("/", function(req, res, next) {
  User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => next(err));
});
module.exports = router;
