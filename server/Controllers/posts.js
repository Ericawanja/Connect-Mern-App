import Post from "../models/posts.js"
import User from "../models/user.js"

//CREATE POST

export const createPost = async (req,res)=>{
    
    try{
        const {description, picturePath} = req.body
        const {id} = req.info
        console.log(id)
       const user = await User.findById(id)

       if(!user) return res.status(403).json({message:"You cannot create a post"})

       const newPost = new Post({
        userId:id,
        
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
        console.log(err)
        res.status(500).json({message:err.message})
    }
}

export const likePost = async (req, res)=>{
    const {postId} = req.params

    const post = await Post.findById(postId)
    if (!post) return res.status(404).json({message:"Couldn't find the post"})

    post.likes = post.likes + 1

}
