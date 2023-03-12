import mongoose from "mongoose";

// const schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength:8 },
    img: { type: String },
    subscribers: { type: Number, default: 0 },
    subscribedUsers: { type: [String] },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
