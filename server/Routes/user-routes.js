import { Router } from "express";
import {
  deleteUser,
  dislikeVideo,
  getUser,
  likeVideo,
  subscribeUser,
  unSubscribeUser,
  updateUser,
} from "../Controllers/user-controller.js";
import { verifyUser } from "../verifyToken";

const userRouter = Router();
//Update a user
userRouter.put("/update/:id", verifyUser, updateUser);

//Delete a User
userRouter.delete("/delete/:id", verifyUser, deleteUser);

//Get a User
userRouter.get("/get/:id", getUser);

//Subscribe a user
userRouter.put("/sub/:id", verifyUser, subscribeUser);

//Unsubscribe a user
userRouter.put("/unsub/:id", verifyUser, unSubscribeUser);

//like a video
userRouter.put("/like/:videoId", verifyUser, likeVideo);

//dislike a video
userRouter.put("/dislike/:videoId", verifyUser, dislikeVideo);

export default userRouter;
