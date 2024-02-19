const express = require("express");
const { getAllPosts, createPost, postComment, getAllPostsComments } = require("../controllers/postController");

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.get("/comments", getAllPostsComments);
router.post("/comments", postComment);

module.exports = router;
