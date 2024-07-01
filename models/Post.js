const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postedDate: { type: Date, required: true },
  isPublic: { type: Boolean, required: true, default: true },
  imageUrl: {
    type: String,
    required: true,
    default: "https://picsum.photos/400/400",
  },
});

module.exports = mongoose.model("Post", PostSchema);
