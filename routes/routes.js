const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoute");
const userRoutes = require("./userRoute");
const postRoutes = require("./postRoute");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
