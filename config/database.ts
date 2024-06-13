import "dotenv/config";
import mongoose from "mongoose";

// import UserModel from "../models/User";
// import PostModel from "../models/Post";
// import CommentModel from "../models/Comment";

mongoose.set("strictQuery", false);
let mongoURI =
  process.env.NODE_ENV === "dev"
    ? process.env.MONGO_URL_DEV || ""
    : process.env.MONGO_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to DB: " + mongoURI);
  } catch (err: unknown) {
    console.error(`Problem connecting to database: ${err}`);
    process.exit(1);
  }
};

// async function testDB() {
//   const user = new UserModel({
//     username: "brenchille",
//     email: "brendan@gmail.com",
//     password: "fasdlkfj!@#lkj",
//   });

//   await user.save();
//   console.log("saved user: " + user);

//   const user2 = new UserModel({
//     username: "bobby123",
//     email: "bobby@gmail.com",
//     password: "fasdlkfj!@#lkj",
//   });

//   await user2.save();
//   console.log("saved user: " + user2);

//   const post = new PostModel({
//     title: "First Post",
//     content: "This is the first blog post here. Very short.",
//     author: user._id,
//     postedDate: Date.now(),
//     isPublic: true,
//   });

//   await post.save();
//   console.log("saved post:" + post);

//   const comment = new CommentModel({
//     content: "Amazing!!!",
//     parentPost: post._id,
//     author: user2._id,
//     postedDate: Date.now(),
//   });

//   await comment.save();
//   console.log("saved comment: " + comment);
//   const posts = await PostModel.find().populate("author").exec();
//   console.log(posts);
// }

// testDB();

export default connectDB;
