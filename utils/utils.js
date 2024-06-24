const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return { salt, hash };
  } catch (err) {
    throw new Error("Error hashing password: " + err);
  }
};

module.exports = {
  hashPassword,
};
