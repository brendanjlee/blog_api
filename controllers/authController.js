const asyncHanlder = require("express-async-handler");

exports.login = asyncHanlder(async (req, res, next) => {
  res.send("post login");
});

exports.signup = asyncHanlder(async (req, res, next) => {
  res.send("post signup");
});
