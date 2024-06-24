const express = require("express");
const router = express.Router();
const passport = require("passport");

const { login, signup } = require("../controllers/authController");
const { userValidation } = require("../utils/validations");

router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).json({
      success: true,
      msg: "You are successfully authenticated to this route!",
    });
  }
);

router.post("/login", userValidation, login);

router.post("/signup", userValidation, signup);

module.exports = router;
