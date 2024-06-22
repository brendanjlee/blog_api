const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
const mongoURI =
  process.env.NODE_ENV === "dev"
    ? process.env.MONGO_URL_DEV || ""
    : process.env.MONGO_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to DB in ENV: " + process.env.NODE_ENV);
  } catch (err) {
    console.error("Problem connecting to database: " + err);
    process.exit(1);
  }
};

module.exports = connectDB;
