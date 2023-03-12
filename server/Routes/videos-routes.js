import { Router } from "express";
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
  addView,
  trend,
  random,
  sub,
  searchByTags,
  Search,
} from "../Controllers/video-controller";
import { verifyUser } from "../verifyToken";

const videoRouter = Router();

//Create a video
videoRouter.post("/", verifyUser, addVideo);

//Update a video
videoRouter.put("/update/:id", verifyUser, updateVideo);

//Delete a video
videoRouter.delete("/delete/:id", verifyUser, deleteVideo);

//Get a video
videoRouter.get("/find/:id", getVideo);

//Update Views
videoRouter.put("/views/:id", addView);

//Trending Videos
videoRouter.get('/trend', trend)

//Random Videos
videoRouter.get('/random', random)

//Subsrcribed Users videos
videoRouter.get('/subVideo', verifyUser, sub)

//Search a videos by tags
videoRouter.get('/tags',searchByTags)

//Search A video using it's title
videoRouter.get('/search',Search);

export default videoRouter;
