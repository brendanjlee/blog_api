const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/authController");
const { userValidation } = require("../utils/validations");

router.post("/login", login);

router.post("/signup", userValidation, signup);

module.exports = router;
