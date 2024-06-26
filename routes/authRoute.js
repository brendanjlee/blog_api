const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/authController");
const { singupValidation, loginValidation } = require("../utils/validations");
const auth = require("../middleware/authMiddleware");
const { authenticateJWT } = require("../middleware/authMiddleware");

router.get("/protected", authenticateJWT, (req, res, next) => {
  res.status(200).json({
    id: req.user._id,
    success: true,
    msg: "You are successfully authenticated to this route!",
  });
});

router.post("/login", singupValidation, login);

router.post("/signup", loginValidation, signup);

module.exports = router;
