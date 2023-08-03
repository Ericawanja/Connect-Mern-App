import Post from "../models/posts.js"
import User from "../models/user.js"

//CREATE POST

export const createPost = async (req,res)=>{
    try{
        const {description, picturePath} = req.body
        const {id} = req.info
       const user = await user.findById(id)

       if(!user) return res.status(403).json({message:"You cannot create a post"})

       const newPost = new Post({
        userId:id,
        firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
        

       })

       await newPost.save()
       const post = await Post.find()
       return  res.status(201).json(post)

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const likePost = async (req, res)=>{

}
