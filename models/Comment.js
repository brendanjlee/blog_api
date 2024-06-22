const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: { type: String, required: true },
  parentPost: { type: Schema.Types.ObjectId, required: true },
  author: { type: Schema.Types.ObjectId, required: true },
  postedDate: { type: Date, required: true },
});

module.exports = mongoose.model("Comment", CommentSchema);
