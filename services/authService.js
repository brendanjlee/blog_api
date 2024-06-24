const User = require("../models/User");

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

module.exports = {
  dupCheck,
  createUser,
};
