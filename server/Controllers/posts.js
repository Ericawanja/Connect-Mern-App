import Post from "../models/posts.js";
import User from "../models/user.js";

//CREATE POST

export const createPost = async (req, res) => {
  try {
    const { description, picturePath } = req.body;
    const { id } = req.info;
    console.log(id);
    const user = await User.findById(id);

    if (!user)
      return res.status(403).json({ message: "You cannot create a post" });

    const newPost = new Post({
      userId: id,
      description,
      picturePath,
      likes: {},
      comments: []
    });

    await newPost.save();
    const post = await Post.find();
    return res.status(201).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post)
      return res.status(404).json({ message: "Couldn't find the post" });
    const { id } = req.info;

    const isLiked = post.likes.get(id);

    if (isLiked) {
      post.likes.delete(id);
    } else {
      post.likes.set(id, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { likes: post.likes },
      { new: true }
    );
    return res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "A server error occured" });
  }
};

export const getUsersPosts = async (req, res) => {
  try {
    const { id } = req.info;

    const posts = await Post.find({userId:id});
    if(posts.length === 0) return res.status(404).json({message:"You don't have any posts yet"})
    return res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "A server error occured" });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "A server error occured" });
  }
};
