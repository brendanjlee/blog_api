import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/database";

const app = express();

// connect to db
connectDB();

// set up middlewares
app.use(cors());

const PORT = 3003;

// routes
app.get("/ping", (_req, res) => {
  res.send("pong");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
