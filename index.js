const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const routes = require("./routes/routes");
const passport = require("passport");

const app = express();

// set up middlewares
app.use(cors());
app.use(express.json());

require("./config/passport");

// This will initialize the passport object on every request
app.use(passport.initialize());

// connect to database
connectDB();

const PORT = 3003;

// routes
app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api", routes);

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
