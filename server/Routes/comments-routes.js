import { Router } from "express";
import {
  addComment,
  deleteComment,
  getComment,
} from "../Controllers/comment-controller";
import { verifyUser } from "../verifyToken";

const commentRouter = Router();

//Add a comment
commentRouter.post("/", verifyUser, addComment);

//Delete Comment
commentRouter.delete("/:id", verifyUser, deleteComment);

//Get comment
commentRouter.get("/:videoId", getComment);

export default commentRouter;
