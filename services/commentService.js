const Comment = require("../models/Comment");

const getAllComments = async (postId) => {
  const comments = await Comment.find({ parentPost: postId })
    .sort({ postedDate: -1 })
    .populate("author", "-salt -hash -email -__v")
    .exec();

  return comments;
};

const createComment = async (newComment) => {
  newComment.save();
  return newComment;
};

const updateComment = async (commentId, updateData) => {
  const comment = await Comment.findByIdAndUpdate(commentId, updateData, {
    new: true,
    runValidators: true,
  });

  return comment;
};

const deleteComment = async (commentId) => {
  const result = await Comment.findByIdAndDelete(commentId);
  return result;
};

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
};
