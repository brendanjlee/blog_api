const asyncHanlder = require("express-async-handler");
const { validationResult } = require("express-validator");
const commentService = require("../services/commentService");
const Comment = require("../models/Comment");

exports.getAllComments = asyncHanlder(async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const comments = await commentService.getAllComments(postId);

    return res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch comments for post " + postId,
    });
  }
});

exports.createComment = asyncHanlder(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const postId = req.params.postId;
  const authorId = req.user._id;
  try {
    const newComment = new Comment({
      content: req.body.content,
      parentPost: postId,
      author: authorId,
      postedDate: Date.now(),
    });

    await commentService.createComment(newComment);

    return res.status(200).json({
      success: true,
      data: newComment,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating comment for post " + postId,
    });
  }
});

exports.updateComment = asyncHanlder(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const commentId = req.params.commentId;
  const updateData = req.body;

  try {
    const comment = await commentService.updateComment(commentId, updateData);

    if (!comment) {
      return res
        .status(404)
        .json({ success: false, message: "Comment not found: " + commentId });
    }

    return res.status(200).json({ success: true, data: comment });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating comment " + commentId,
    });
  }
});

exports.deleteComment = asyncHanlder(async (req, res, next) => {
  const commentId = req.params.commentId;
  try {
    const result = await commentService.deleteComment(commentId);

    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting comment: " + commentId,
    });
  }
});
