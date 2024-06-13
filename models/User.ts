import mongoose from "mongoose";
import { User } from "../types";

// define interface for User type in mongoose
interface IUser extends mongoose.Document, User {}

const schema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<IUser>("User", schema);

export default UserModel;
