import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  videoId: { type: String, required: true },
  desc: { type: String, required: true },
  likes: { type: [String] },
});

export default mongoose.model("comment", commentSchema);
