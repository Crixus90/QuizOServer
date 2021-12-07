const router = require("express").Router();
const Questions = require("../models/Questions.model");

router.get("/", (req, res) => {
  console.log(req.query);
  console.log("hi");
  Questions.find({ category: req.query.category })
    .then((questions) => {
      console.dir(
        questions.map((el) => el.toJSON()),
        { depth: null }
      );
    })
    .catch((e) => {
      res.status(500).json({ errorMessage: "There was a server error!" });
    });
});

router.post("/", (req, res) => {
  const { category, question, answerA, answerB, answerC, answerD } = req.body;

  //   console.log(category, question, answerA, answerB, answerC, answerD);
  Questions.create({
    category,
    question,
    answer: {
      a: {
        value: answerA,
      },
      b: {
        value: answerB,
      },
      c: {
        value: answerC,
      },
      d: {
        value: answerD,
      },
    },
  })
    .then((createdQuestion) => {
      res.json(true);
    })
    .catch((e) => {
      res.status(500).json({ errorMessage: "There was a server error!" });
    });
});

module.exports = router;
