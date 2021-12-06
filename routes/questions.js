const router = require("express").Router();
const Questions = require("../models/Questions.model");

router.post("/", (req, res) => {
  const { category, question, answerA, answerB, answerC, answerD } = req.body;
  console.log(req.body);

  //   console.log(category, question, answerA, answerB, answerC, answerD);
  Questions.create({
    category,
    question,
    answerA,
    answerB,
    answerC,
    answerD,
  })
    .then((createdQuestion) => {
      res.json(true);
    })
    .catch((e) => {
      res.status(500).json({ errorMessage: "There was a server error!" });
    });
});

module.exports = router;