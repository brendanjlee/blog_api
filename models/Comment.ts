import mongoose, { Schema } from "mongoose";
import { Comment } from "../types";

interface IComment extends mongoose.Document, Comment {}

const schema = new Schema<IComment>({
  content: { type: String, required: true },
  parentPost: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postedDate: { type: Date, required: true },
});

const CommentModel = mongoose.model<IComment>("Comment", schema);

export default CommentModel;
