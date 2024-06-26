const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return { salt, hash };
  } catch (err) {
    throw new Error("Error hashing password: " + err);
  }
};

const validPassword = async (reqPassword, userPassword) => {
  const compare = await bcrypt.compare(reqPassword, userPassword);
  return compare;
};

const issueJWT = (user) => {
  const _id = user._id;
  const key = process.env.JWT_SECRET_KEY;
  const expiresIn = "1d";
  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, key, {
    expiresIn: expiresIn,
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

module.exports = {
  hashPassword,
  validPassword,
  issueJWT,
};
