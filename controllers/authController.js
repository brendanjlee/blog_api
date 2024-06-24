const asyncHanlder = require("express-async-handler");
const { validationResult } = require("express-validator");
const util = require("../utils/utils");
const authService = require("../services/authService");

exports.login = asyncHanlder(async (req, res, next) => {
  // validate body fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, email, password } = req.body;

  try {
    // find user
    const user = await authService.findUser(username);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    // validate password
    const isValid = await util.validPassword(password, user.hash);
    if (isValid) {
      const tokenObject = util.issueJWT(user);
      return res.status(200).json({
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      });
    }

    return res
      .status(401)
      .json({ success: false, message: "Password incorrect" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed validating user " + error });
  }
});

exports.signup = asyncHanlder(async (req, res, next) => {
  // validate body fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, email, password } = req.body;

  try {
    // check if username or email exists
    if (await authService.dupCheck(username, email)) {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already exists" });
    }

    // create new user
    const { salt, hash } = await util.hashPassword(password);
    const newUser = await authService.createUser(username, email, salt, hash);
    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to save new user: " + error });
  }
});
