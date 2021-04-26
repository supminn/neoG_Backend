const express = require("express");
const router = express.Router();
const { getVideos, addVideo, findVideo, getVideoById, updateVideo } = require("../controllers/video.controller");

router
  .route("/")
  .get(getVideos)
  .post(addVideo);

router.param("videoId",findVideo);

router
  .route("/:videoId")
  .get(getVideoById)
  .post(updateVideo)
  .delete((req, res) => {
    res.json({
      success: false,
      message: "DELETE functionality not yet implemented",
    });
    /*
      let {video} = req;
      await video.remove();
      video.deleted = true;
      res.json({success:true, result})
    */
  });

module.exports = router;
