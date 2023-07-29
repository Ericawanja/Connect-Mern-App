import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";



export const register = async (req, res)=>{
    try{
       
        const {firstName, lastName, email, password, picturePath, friends, location, occupation} = req.body
        const hashedPassword = await bcrypt.hash(password, 8)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:  hashedPassword,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
          });
          const savedUser = await newUser.save();
          delete savedUser.password
        return   res.status(201).json(savedUser);

    }catch(err){

     return   res.status(500).json({"message": err})

    }
}


export const Login = async (req,res)=>{
    try{
        const {email, password} = req.body

        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({"message": "Invalid credentials"})


        const isMatch = await bcrypt.compare(password, user.password)

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        delete user.password

        res.status(200).json({token, user})

    }catch(err){

     return   res.status(500).json({"message": err})

    }
}