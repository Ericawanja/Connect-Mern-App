import express  from "express";
import { createPost, likePost } from "../Controllers/posts.js";
import { verifyToken } from "../middleware/verifytoken.js";

const router = express.Router()
router.post("/create", verifyToken, createPost)
router.post("/:id/like", likePost)

export default router