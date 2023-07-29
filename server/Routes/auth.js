import  express  from "express";
import { Login } from "../Controllers/auth.js";



const authRoutes = express.Router()
authRoutes.post("/login", Login)
// authRoutes.post("register", register)

export default authRoutes
