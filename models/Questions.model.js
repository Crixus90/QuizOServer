const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema({
  category: String,
  question: String,
  answer: {
    a: {
      value: String,
      iscorrect: {
        type: Boolean,
        default: true,
      },
    },
    b: {
      value: String,
    },
    c: {
      value: String,
    },
    d: {
      value: String,
    },
  },
});

const Questions = model("Questions", QuestionSchema);

module.exports = Questions;
