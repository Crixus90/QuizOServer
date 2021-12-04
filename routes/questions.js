const router = require("express").Router();
const Questions = require("../models/Questions.model");

router.post("/", (req, res) => {
  const { category, question, answerA, answerB, answerC, answerD } = req.body;
  console.log(req.body);

  //   console.log(category, question, answerA, answerB, answerC, answerD);
  Questions.create({ category, question, answerA, answerB, answerC, answerD });
});

module.exports = router;
