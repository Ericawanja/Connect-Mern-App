
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const verifyToken = async (req,res, next) =>{
    
    try{
        const bearer = req.headers["authorization"]
        if(!bearer || !bearer.startsWith("Bearer ")){
            res.status(403).json({ message: "Access Denied" });
        }else{
            const token = bearer.split(" ")[1]
            console.log(token, process.env.JWT_SECRET )
            const decodedData = await jwt.verify(token, process.env.JWT_SECRET)

          
            req.info = decodedData
            next()
        }

    }catch (error) {
        console.log(error)
    return res.status(401).json({ message: error.message });
  }

}
 