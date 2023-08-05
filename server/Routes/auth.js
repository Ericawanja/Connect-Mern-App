import  express  from "express";
import { Login } from "../Controllers/auth.js";
import { LoginSchema } from "../schemas/index.js";
import validator from "../middleware/validator.js";



const authRoutes = express.Router()
authRoutes.post("/login", validator(LoginSchema, "body"), Login)
// authRoutes.post("register", register)

export default authRoutes
