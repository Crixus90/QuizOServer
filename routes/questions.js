const router = require("express").Router();
const Questions = require("../models/Questions.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", (req, res) => {
  Questions.find({ category: req.query.category })
    .then((questions) => {
      res.json({ questions });
    })
    .catch((e) => {
      res.status(500).json({ errorMessage: "There was a server error!" });
    });
});

router.post("/", isLoggedIn, (req, res) => {
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
