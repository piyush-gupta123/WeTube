import { createError } from "../error";
import User from "../Models/User";
import Videos from "../Models/Videos";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.User.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    next(createError(403, "You can only update your account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.User.id) {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.status(200).json({ Message: "User has been deleted" });
    } catch (err) {
      next(err);
    }
  } else {
    next(createError(403, "You can only delete your account"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id);
    if (!users) {
      return res.status(404).json({ Message: "User does not exists" });
    }

    const { password, ...others } = users._doc;

    return res.status(200).json(others);
  } catch (err) {
    next(err);
  }
};

export const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.User.id, {
      $push: { subscribedUsers: req.params.id },
    });
    // const success=false;
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
      // success:true
    });

    // if(success) console.log(us);
    // else console.log("Unsuccessfull");

    return res.status(200).json({ Message: "Subscription Successfull.." });
  } catch (err) {
    next(err);
  }
};

export const unSubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.User.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    // const success=false;
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
      // success:true,
    });

    // if(success) console.log("success");
    // else console.log("Unsuccessfull");

    return res.status(200).json({ Message: "Unsubscription Successfull.." });
  } catch (err) {
    next(err);
  }
};

export const likeVideo = async (req, res, next) => {
  const UserId = req.User.id;
  const videoId = req.params.videoId;
  try {
    await Videos.findByIdAndUpdate(videoId, {
      $addToSet: { likes: UserId },
      $pull: { dislikes: UserId },
    });
    res.status(200).json({ Message: "Video has been liked.." });
  } catch (err) {
    next(err);
  }
};

export const dislikeVideo = async (req, res, next) => {
  const userId = req.User.id;
  const videoId = req.params.videoId;
  try {
    await Videos.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    });
    res.status(200).json({ Message: "Video has been disliked.." });
  } catch (err) {
    next(err);
  }
};
