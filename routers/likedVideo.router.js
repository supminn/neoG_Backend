const express = require("express");
const router = express.Router();
const {getLikedVideos, findUserLikedVideo, getUserLikedVideo, updateLikedVideo} = require("../controllers/likedVideo.controller");

router.route("/")
.get(getLikedVideos); 

router.param("userId", findUserLikedVideo);

router.route("/:userId")
.get(getUserLikedVideo)
.post(updateLikedVideo);

module.exports = router;