const asyncHanlder = require("express-async-handler");

exports.getAllPosts = asyncHanlder(async (req, res, next) => {
  res.send("get all posts");
});

exports.getPost = asyncHanlder(async (req, res, next) => {
  res.send("get post by id: " + req.params.postId);
});

exports.createPost = asyncHanlder(async (req, res, next) => {
  res.send("create post");
});

exports.updatePost = asyncHanlder(async (req, res, next) => {
  res.send("update post by id: " + req.params.postId);
});

exports.deletePost = asyncHanlder(async (req, res, next) => {
  res.send("delete post by id: " + req.params.postId);
});
