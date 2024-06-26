const asyncHanlder = require("express-async-handler");

exports.getAllComments = asyncHanlder(async (req, res, next) => {
  res.send("get all Comments in Post id: " + req.params.postId);
});

exports.createComment = asyncHanlder(async (req, res, next) => {
  res.send("create Comment in Post id: " + req.params.postId);
});

exports.updateComment = asyncHanlder(async (req, res, next) => {
  res.send(
    `Update comment id ${req.params.commentId} in post id ${req.params.postId}`
  );
});

exports.deleteComment = asyncHanlder(async (req, res, next) => {
  res.send(
    `Delete comment id ${req.params.commentId} in post id ${req.params.postId}`
  );
});
