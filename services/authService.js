const User = require("../models/User");
const { hashPassword, validPassword, issueJWT } = require("../utils/utils");

const dupCheck = async (username, email) => {
  const user = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });
  return user !== null;
};

const createUser = async (username, email, salt, hash) => {
  const newUser = new User({
    username: username,
    email: email,
    salt: salt,
    hash: hash,
  });
  await newUser.save();
  return newUser;
};

const findUser = async (username) => {
  return await User.findOne({ username: username });
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ username: username });
};

module.exports = {
  dupCheck,
  createUser,
  findUser,
  loginUser,
};
