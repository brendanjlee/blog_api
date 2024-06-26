const asyncHanlder = require("express-async-handler");

exports.getAllUsers = asyncHanlder(async (req, res, next) => {
  res.send("get all users");
});

exports.getUser = asyncHanlder(async (req, res, next) => {
  res.send("get user by id: " + req.params.userId);
});
