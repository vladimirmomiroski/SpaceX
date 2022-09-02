const mongoose = require("mongoose");

const CommentsSchema = mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  parentId: {
    type: String,
    reqired: true,
  },
});

module.exports = mongoose.model("comments", CommentsSchema);
