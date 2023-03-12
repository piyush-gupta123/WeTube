import user from "../Models/User";
import bcrypt from "bcryptjs";
import User from "../Models/User";
import jwt  from "jsonwebtoken";
import { createError } from "../error";

//Creating Users
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  // console.log(req.body);
  try {
    if (!name || !email || !password) {
      return res.status(404).json({ message: "Please Enter All the fields" });
    }
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new user({
      name: name,
      email: email,
      password: hashedPassword,
    });

    if (!newUser) {
      res.status(400).json({ message: "An Error Occured" });
    }

    await newUser.save();

    return res.status(200).json({ newUser });
  } catch (err) {
    // console.log(err);
    next(createError(400,"Something Went Wrong!!"));
  }
};

//Login
export const login = async (req, res,next) => {
  // const { email, password } = req.body;
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(404).json({ message: "Please Enter the credentials" });
    }
    const email = req.body.email;
    const user = await User.findOne({email});

    if (!user) {
      return res.status(400).json({ message: "User Does Not Exists" });
    }

    const confirmPass = bcrypt.compareSync(req.body.password, user.password);

    if (!confirmPass) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({id:user._id},process.env.SECRET_KEY);

    const {password , ...others} = user._doc;

    res.cookie("access_token",token,{
      httpOnly:true,
    }).status(200).json(others);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

//Google Authentication
