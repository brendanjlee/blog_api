const { body } = require("express-validator");

const singupValidation = [
  body("username", "Username must be at least 5 characters long")
    .trim()
    .isLength({ min: 5 })
    .escape(),
  body("email").isEmail().escape(),
  body("password", "Password must be at least 8 characters long").isLength({
    min: 8,
  }),
];

const loginValidation = [
  body("username", "Username must be at least 5 characters long")
    .trim()
    .isLength({ min: 5 })
    .escape(),
  body("password", "Password must be at least 8 characters long").isLength({
    min: 8,
  }),
];

module.exports = {
  singupValidation,
  loginValidation,
};
