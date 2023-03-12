import { createError } from "../error.js";
import comments from "../Models/comments.js";
import Videos from "../Models/Videos.js";

export const addComment = async (req, res, next) => {
  const comment = await comments({ userId: req.User.id, ...req.body });
  try {
    if (!comment) next(createError(500, "Something Went Wrong!!"));
    const savedComment = await comment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
    // const Id = req.params.id;
  try {
    const comment = await comments.findById(req.params.id);
    const video = await Videos.findById(req.params.id);
    if(req.User.id === comment.userId || req.User.id === video.userID){
        await comments.findByIdAndDelete(req.params.id);
        res.status(200).json({Message: "Comment Deleted Successfully..."})
    }
    else{
        next(createError(403,"You can only delete your comment!!"));
    }
    
  } catch (err) {
    next(err);
  }
};

export const getComment = async (req, res, next) => {
  try {
    const comment = await comments.find({videoId: req.params.videoId})
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
};
