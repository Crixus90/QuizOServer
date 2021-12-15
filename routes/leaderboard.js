const router = require("express").Router();
const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, (req, res) => {
  User.find({})
    .sort({ score: -1 })
    .then((allUsers) => {
      res.json({ users: allUsers });
    });
});

module.exports = router;
