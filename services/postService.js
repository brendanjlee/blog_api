const mongoose = require("mongoose");
const Post = require("../models/Post");

const getPostById = async (postId) => {
  const post = await Post.findById(postId).populate(
    "author",
    "-salt -hash -email -__v"
  );
  return post;
};

const getAllPosts = async (postId) => {
  const posts = await Post.find()
    .sort({ postedDate: -1 })
    .populate("author", "-salt -hash -email -__v")
    .exec();

  return posts;
};

const createPost = async (newPost) => {
  newPost.save();
  return newPost;
};

const updatePost = async (postId, updateData) => {
  const post = await Post.findByIdAndUpdate(postId, updateData, {
    new: true,
    runValidators: true,
  });

  return post;
};

const deletePost = async (postId) => {
  const result = await Post.findByIdAndDelete(postId);
  return result;
};

const validateId = async (postId) => {
  return mongoose.Types.ObjectId.isValid(postId);
};

module.exports = {
  getPostById,
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  validateId,
};
