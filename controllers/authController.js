const asyncHanlder = require("express-async-handler");
const { validationResult } = require("express-validator");
const { hashPassword } = require("../utils/utils");
const { dupCheck, createUser } = require("../services/authService");

exports.login = asyncHanlder(async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  res.send("post login with body");
});

exports.signup = asyncHanlder(async (req, res, next) => {
  // validate body fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, password } = req.body;

    // check if username or email exists
    if (await dupCheck(username, email)) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // create new user
    const { salt, hash } = await hashPassword(password);
    const newUser = await createUser(username, email, salt, hash);
    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to save new user: " + error });
  }
});
