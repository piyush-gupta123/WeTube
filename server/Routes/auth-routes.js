import { Router } from "express";
import { googleAuth, login, signup } from "../Controllers/auth-controller.js";

const authRouter = Router();

//Create a User
authRouter.post('/signup',signup);

//Login 
authRouter.post('/login',login);

//Login using google account
authRouter.post('/google',googleAuth);

export default authRouter;