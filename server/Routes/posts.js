import express  from "express";
import { createPost, getFeedPosts, getUsersPosts, likePost } from "../Controllers/posts.js";
import { verifyToken } from "../middleware/verifytoken.js";

const router = express.Router()
router.post("/create", verifyToken, createPost)
router.post("/:postId/like",verifyToken, likePost)
router.get("/user", verifyToken, getUsersPosts)
router.get("/feed", verifyToken, getFeedPosts)

export default router