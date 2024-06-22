const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const routes = require("./routes/routes");

require("./config/passport"); // import strategy

const app = express();

// set up middlewares
app.use(cors());
app.use(express.json());

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
