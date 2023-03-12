import { Router } from "express";
import { login, signup } from "../Controllers/auth-controller.js";

const authRouter = Router();

//Create a User
authRouter.post('/signup',signup);

//Login 
authRouter.post('/login',login);

//Login using google account
// authRouter.post('/google',)

export default authRouter;