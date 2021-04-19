const express = require("express");
const faker = require("faker");
const router = express.Router();
const { extend } = require("lodash");
const Video = require("../models/video.model");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const videos = await Video.find({});
      res.json({ success: true, videos });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Unable to get the list of videos",
        errMessage: err.message,
      });
    }
  })

  .post(async (req, res) => {
    try {
      const video = req.body;
      video.date = faker.date.past();
      const newVideo = new Video(video);
      const savedVideo = await newVideo.save();
      res.status(201).json({ success: true, video: savedVideo });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Unable to add new video",
        errMessage: err.message,
      });
    }
  });

router.param("videoId", async (req, res, next, vId) => {
  try {
    const video = await Video.findById(vId);
    if (!video) {
      throw Error("Unable to fetch the video");
    }
    req.video = video;
    next();
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Unable to retrive the video" });
  }
});

router
  .route("/:videoId")
  .get(async (req, res) => {
    const { video } = req;
    video.__v = undefined;
    res.json({ success: true, video });
  })

  .post(async (req, res) => {
    let { video } = req;
    const videoUpdates = req.body;
    video = extend(video, videoUpdates);
    video = await video.save();
    res.json({ success: true, video });
  })

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
