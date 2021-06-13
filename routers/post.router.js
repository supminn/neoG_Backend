const express = require("express");
const router = express.Router();
const {getAllPosts, addNewPost, deletePost, findPostById, fetchLikedUsers, updateLikedPost, fetchUserComments, addUserComment, deleteUserComment} = require("../controllers/post.controller");

router.route("/")
.get(getAllPosts)
.post(addNewPost)
.put(deletePost)

router.param("postId", findPostById);

router.route("/:postId/likes")
.get(fetchLikedUsers)
.post(updateLikedPost)

router.route("/:postId/comments")
.get(fetchUserComments)
.post(addUserComment)
.put(deleteUserComment)

module.exports = router;