const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

// Post Routes
router.get("/", getAllPosts);

router.get("/:postId", getPost);

router.post("/", createPost);

router.put("/:postId", updatePost);

router.delete("/:postId", deletePost);

// Comment Routes
router.get("/:postId/comments", getAllComments);

router.post("/:postId/comments", createComment);

router.put("/:postId/comments/:commentId", updateComment);

router.delete("/:postId/comments/:commentId", deleteComment);

module.exports = router;
