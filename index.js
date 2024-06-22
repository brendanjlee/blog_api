const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const app = express();

// set up middlewares
app.use(cors());

// connect to database
connectDB();

const PORT = 3003;

// routes
app.get("/ping", (_req, res) => {
  res.send("pong");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
