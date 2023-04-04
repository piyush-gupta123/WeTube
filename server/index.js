import express from "express";
import mongoose from "mongoose";
import authRouter from "./Routes/auth-routes.js";
import commentRouter from "./Routes/comments-routes.js";
import userRouter from "./Routes/user-routes.js";
import videoRouter from "./Routes/videos-routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
mongoose.set("strictQuery", true);

const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Server is connected at port 5000`))
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/user", userRouter); 
app.use("/videos", videoRouter);
app.use("/comments", commentRouter);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Went Wrong!!";
  return res.status(status).json({
    status: false,
    status,
    message,
  });
});
