const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postedDate: { type: Date, required: true },
  isPublic: { type: Boolean, required: true, default: true },
});

module.exports = mongoose.model("Post", PostSchema);
