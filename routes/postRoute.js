const express = require("express");
const router = express.Router();

const { authenticateJWT } = require("../middleware/authMiddleware");
const { postValidation } = require("../utils/validations");

const {
  getAllPosts,
  getPostById,
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

router.get("/:postId", getPostById);

router.post("/", authenticateJWT, postValidation, createPost);

router.put("/:postId", authenticateJWT, postValidation, updatePost);

router.delete("/:postId", authenticateJWT, deletePost);

// Comment Routes
router.get("/:postId/comments", getAllComments);

router.post("/:postId/comments", createComment);

router.put("/:postId/comments/:commentId", updateComment);

router.delete("/:postId/comments/:commentId", deleteComment);

module.exports = router;
