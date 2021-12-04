const router = require("express").Router();
const authRoutes = require("./auth");
const questionRoutes = require("./questions");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/questions", questionRoutes);

module.exports = router;
