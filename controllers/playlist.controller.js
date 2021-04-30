const User = require("../models/user.model");
const Playlist = require("../models/playlist.model");
const { concat } = require("lodash");

const getPlaylists = async (req, res) => {
  const playlist = await Playlist.find({});
  res.json({ success: true, playlist });
};

const findUserPlaylist = async (req, res, next, userId) => {
  try {
    let user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "Invalid user! Kindly register to continue",
      });
      throw Error("Invalid User");
    }
    let playlist = await Playlist.findOne({ userId });

    if (!playlist) {
      playlist = new Playlist({
        userId,
        playlists: [{ name: "Watch Later", videos: [], active: true }],
      });
      playlist = await playlist.save();
    }
    req.playlist = playlist;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive user's playlists",
      errorMessage: error.message,
    });
  }
};

const getActivePlaylistItems = async (playlist) => {
  playlist.playlists = playlist.playlists = playlist.playlists.filter(
    (list) => list.active
  );
  for(let list of playlist.playlists){
    if(list.videos.length>0){
      list.videos = list.videos.filter(video => video.active);
    }
  }
  return playlist.playlists;
};

const getUserPlaylist = async (req, res) => {
  try {
    let { playlist } = req;
    const playlistItems = await getActivePlaylistItems(playlist);
    res.json({ success: true, playlist: playlistItems });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive the playlist",
      errMessage: err.message,
    });
  }
};

const createPlaylist = async (req, res) => {
  const { name, _id } = req.body;
  let { playlist } = req;
  const newList = {
    name,
    videos: [{ _id, active: true }],
    active: true,
  };
  playlist.playlists = concat(playlist.playlists,newList );
  let updatedPlaylist = await playlist.save();
  updatedPlaylist = await getActivePlaylistItems(updatedPlaylist);
  res.status(201).json({ success: true, playlist: newList });
};

const updatePlaylistName = async (req, res) => {
  const { _id, name } = req.body;
  let { playlist } = req;
  for (let list of playlist.playlists) {
    if (list._id == _id) {
      list.name = name;
      break;
    }
  }
  let updatedPlaylist = await playlist.save();
  updatedPlaylist = await getActivePlaylistItems(updatedPlaylist);
  res.json({ success: true, playlist: updatedPlaylist });
};

const getVideosInPlaylist =  (playlist, listId) => {
    let playlistItem = playlist.playlists.find((item) => item._id == listId && item.active);
    if (!playlistItem) {
      throw Error("Playlist item not found. It may either be deleted or not created");
    }
    return playlistItem.videos;
};

const getActiveVideos = videoList => {
  videoList = videoList.filter(item => item.active);
  return videoList.map(item => item._id);
}

const getPlaylistVideos =  async (req, res) => {
  const {playlistId} = req.params;
  const {playlist} = req;
  let playlistVideos = getVideosInPlaylist(playlist, playlistId);
 playlistVideos = getActiveVideos(playlistVideos);
  res.json({ success: true , playlist: playlistVideos});
};

const updatePlaylistVideo = async (req, res) => {
  let {playlist} = req; 
  const {playlistId} = req.params;
  const {_id}  = req.body;
  let playlistVideos = getVideosInPlaylist(playlist, playlistId);
  playlistVideos = playlistVideos.map(item => item._id);
  const videoExists = playlistVideos.some(item => item == _id);
    for(let list of playlist.playlists){
      if(list._id == playlistId){
        if(videoExists){
          for(let video of list.videos){
            if(video._id == _id){
              video.active = !video.active;
              break;
            }
          }
        }
        else{
          list.videos.push({_id, active: true});
          break;
        }
      }
    }
  let updatedPlaylist = await playlist.save();
  playlistVideos = getVideosInPlaylist(updatedPlaylist, playlistId);
  playlistVideos = getActiveVideos(playlistVideos);
  res.json({ success: true, playlist: playlistVideos });
};

const removePlaylist = async (req, res) => {
  let {playlist} = req;
  const {playlistId} = req.params;
  for(let list of playlist.playlists){
    if(list._id == playlistId){
      list.active = false;
      break;
    }
  }
  playlist.playlists[0].active = true; // Watch later is always true
  let updatedPlaylist = await playlist.save();
  updatedPlaylist = await getActivePlaylistItems(updatedPlaylist);
  res.json({ success: true, playlist: updatedPlaylist });
};

module.exports = {
  getPlaylists,
  findUserPlaylist,
  getUserPlaylist,
  createPlaylist,
  updatePlaylistName,
  removePlaylist,
  getPlaylistVideos,
  updatePlaylistVideo,
};
