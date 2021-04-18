const express = require("express");
const router = express.Router();
const videos = require("../data/videos");

router
  .route("/")
  .get((req, res) => {
    res.json(videos);
  })
  .post((req, res) =>
    res.send({ success: false, message: "POST functionality not implemented" })
  );

router
  .route("/:videoId")
  .get((req, res) => {
    const { videoId } = req.params;
    const data = videos.find((item) => item.id === videoId);
    res.json(data);
  })
  .post((req, res) =>
    res.send({ success: false, message: "POST functionality not implemented" })
  )
  .delete((req, res) =>
    res.send({
      success: false,
      message: "DELETE functionality not implemented",
    })
  );

module.exports = router;
/* Implementation yet to be done completely */