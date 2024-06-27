const asyncHanlder = require("express-async-handler");
const { validationResult } = require("express-validator");
const postService = require("../services/postService");

exports.getAllPosts = asyncHanlder(async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching all posts: " + error,
    });
  }
});

exports.getPostById = asyncHanlder(async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await postService.getPostById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with id: ${postId} not found`,
      });
    }
    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching post with postId: " + postId,
    });
  }
});

exports.createPost = asyncHanlder(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
      postedDate: Date.now(),
      isPublic: true,
    });

    await postService.createPost(newPost);

    return res.status(200).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating post: " + error,
    });
  }
});

exports.updatePost = asyncHanlder(async (req, res, next) => {
  // valiate fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const postId = req.params.postId;
  const updateData = req.body;

  try {
    const post = await postService.updatePost(postId, updateData);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: `Post with id: ${postId} not found` });
    }

    return res.status(200).json({ success: true, data: post });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating post with postId: " + postId,
    });
  }
});

exports.deletePost = asyncHanlder(async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const result = await postService.deletePost(postId);

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting post with postId: " + postId,
    });
  }
});
