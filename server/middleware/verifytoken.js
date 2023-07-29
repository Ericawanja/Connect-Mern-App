import express from "express"

const verifyToken = async (req,res, next) =>{
    try{
        const bearer = req.headers["authorization"]
        if(!bearer || !bearer.startsWith("Bearer ")){
            res.status(403).json({ message: "Access Denied" });
        }else{
            const token = bearer.split(" ")[1]
            const decodedData = await JsonWebTokenError.verify(token, process.env.SECRET)

            console.log(decodedData)
            req.info = decodedData
        }

    }catch (error) {
    return res.status(401).json({ message: error.message });
  }

}