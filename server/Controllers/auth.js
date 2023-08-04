import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from"dotenv"

dotenv.config()


export const register = async (req, res)=>{
    console.log("running")
    try{
       
        const {firstName, lastName, email, password, picturePath, friends, location, occupation} = req.body
        const hashedPassword = await bcrypt.hash(password, 8)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:  hashedPassword,
            picturePath,
            friends: 0,
            location,
            occupation,
            viewedProfile: 0,
            impressions: 0,
          });
           await newUser.save();
         
        return   res.status(201).json({message: "user succesfully saved"});

    }catch(err){
        

     return   res.status(500).json({"message": "Couldn't register the user"})

    }
}


export const Login = async (req,res)=>{
    try{
        console.log("LOgging...")
        const {email, password} = req.body
       

        const user = await User.findOne({email:email})
        if(!user) return res.status(500).json({"message": "Invalid credentials"})


        const isMatch = await bcrypt.compare(password, user.password)
        
        if(!isMatch) return res.status(500).json({"message": "Invalid credentials"})

        console.log(process.env.JWT_SECRET)
        const token = await jwt.sign({id: user._id}, process.env.JWT_SECRET)
        
        
        return  res.status(200).json({message:"succesfully logged in", token})
    }catch(err){

     return   res.status(500).json({"message": err})

    }
}