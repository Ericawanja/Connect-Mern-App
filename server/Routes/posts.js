import express  from "express";
import { createPost } from "../Controllers/posts.js";
import { verifyToken } from "../middleware/verifytoken.js";

const router = express.Router()
router.post("/create", verifyToken, createPost)

export default router