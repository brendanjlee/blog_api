import mongoose, { Schema } from "mongoose";
import { Post } from "../types";

interface IPost extends Document, Post {}

const schema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postedDate: { type: Date, required: true },
  isPublic: { type: Boolean, required: true, default: true },
});

const PostModel = mongoose.model<IPost>("Post", schema);

export default PostModel;
