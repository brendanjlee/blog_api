const mongoose = require("mongoose");
require("dotenv").config();

// const UserModel = require("../models/User");
// const PostModel = require("../models/Post");
// const CommentModel = require("../models/Comment");

mongoose.set("strictQuery", false);
const mongoURI =
  process.env.NODE_ENV === "dev"
    ? process.env.MONGO_URL_DEV || ""
    : process.env.MONGO_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to DB: " + mongoURI);
  } catch (err) {
    console.error("Problem connecting to database: " + err);
    process.exit(1);
  }
};

module.exports = connectDB;
