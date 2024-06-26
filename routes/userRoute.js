const express = require("express");
const router = express.Router();

const { getUser, getAllUsers } = require("../controllers/userController");

router.get("/", getAllUsers);

router.get("/:userId", getUser);

module.exports = router;
