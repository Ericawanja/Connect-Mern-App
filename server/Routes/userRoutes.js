import express from "express";
import { addRemoveFriend, getUser, getUserFriends } from "../Controllers/userController.js";
import { verifyToken } from "../middleware/verifytoken.js";


const router = express.Router()

router.get("/:id", verifyToken, getUser)
router.get("/:id/friends",  getUserFriends )
router.patch("/:id/:friendId",  addRemoveFriend)

export default router
