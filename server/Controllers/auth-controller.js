// import user from "../Models/User";
import bcrypt from "bcryptjs";
import User from "../Models/User";
import jwt from "jsonwebtoken";
import { createError } from "../error";

//Creating Users
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(404).json({ message: "Please Enter All the fields" });
    }
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    if (!newUser) {
      res.status(401).json({ message: "User already exists" });
    }
    

    await newUser.save();

    return res.status(200).json({ Message: "Success" });
  } catch (err) {
    next(createError(400, "Something Went Wrong!!"));
  }
};

//Login
export const login = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    if (!name || !req.body.password) {
      return res.status(404).json({ message: "Please Enter the credentials" });
    }

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(400).json({ message: "User Does Not Exists" });
    }

    const confirmPass = bcrypt.compareSync(req.body.password, user.password);

    if (!confirmPass) {
      return res.status(403).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    const { password, ...others } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(others);
  } catch (err) {
    next(err);
  }
};

//Google Authentication

export const googleAuth = async(req,res,next)=>{
  try{
    const user = await User.findOne({email: req.body.email})

    if(user){
      const token = jwt.sign({id: user._id}, process.env.SECRET_KEY)
      res.cookie("access_token",token,{
        httpOnly: true
      }).json(user._doc)
    }
    else{
      const newUser = new User({
        ...req.body,
        fromGoogle: true
      })
      const savedUser = await newUser.save()
      const token = jwt.sign({id: savedUser._id}, process.env.SECRET_KEY)
      res.cookie("access_token",token,{
        httpOnly: true
      }).json(savedUser._doc)
    }
  }
  catch(err){
    next(err);
  }
}
