import { createError } from "../error.js";
import Video from "../Models/Videos.js";
import User from "../Models/User.js";

//Add New videos
export const addVideo = async (req, res, next) => {
  const video = new Video({ userID: req.User.id, ...req.body });
  try {
    const saveVideo = await video.save();
    res.status(200).json(saveVideo);
  } catch (err) {
    next(err);
  }
};

//Update Video Using Id
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) next(createError(404, "Video Not Found"));
    if (req.User.id === video.userID) {
      const Video_updated = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(Video_updated);
    } else {
      next(createError(403, "You Can Update Only Your video"));
    }
  } catch (err) {
    next(err);
  }
};

//delete a video by ID
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) next(createError(404, "Video Not Found"));
    if (req.User.id === video.userID) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json({ Message: "Deletetion Successfull" });
    } else {
      next(createError(403, "You can only Delete your video"));
    }
  } catch (err) {
    next(err);
  }
};

//get video by ID
export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) next(createError(404, "Video Not Found"));
    console.log(video)
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

//Add View to videos by ID
export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json({ Message: "Views has been increased" });
  } catch (err) {
    next(err);
  }
};

//Trending Videos
export const trend = async (req, res, next) => {
  try {
    const videos = await find().sort({ views: -1 });
    if (!videos) next(createError(404, "Video Not Found"));
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

//Random Videos
export const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    if (!videos) next(createError(404, "Video Not Found"));
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

//Subscribed Users Videos
export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.User.id);
    const subscribedUsers = user.subscribedUsers;
    const list = await Promise.all(
      subscribedUsers.map((channelId) => {
        return Video.find({ userID: channelId });
      })
    );
    return res
      .status(200)
      .json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

//Searching By Tags
export const searchByTags = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    if (!videos) next(createError(404, "Video Not Found"));
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

//Search by title
export const Search = async (req, res, next) => {
  const query = req.query.title;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(20); 
    if (!videos) next(createError(404, "No Video Found"));
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
