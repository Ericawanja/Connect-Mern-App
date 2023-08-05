import express  from "express";
import { commentOnPost, createPost, getFeedPosts, getUsersPosts, likePost } from "../Controllers/posts.js";
import { verifyToken } from "../middleware/verifytoken.js";
import { CommentSchema, PostSchema } from "../schemas/index.js";
import validator from "../middleware/validator.js";

const router = express.Router()
router.post("/create", verifyToken, validator(PostSchema, "body"), createPost)
router.post("/:postId/like",verifyToken, likePost)
router.get("/user", verifyToken,  getUsersPosts)
router.get("/feed", verifyToken, getFeedPosts)
router.patch("/:postId/comment", verifyToken,validator(CommentSchema, "body"), commentOnPost)

export default router