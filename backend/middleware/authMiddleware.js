const jwt=require("jsonwebtoken")
const config = require("../config/config")
const verifyToken=(req,res,next)=>{
    const authHeader= req.header("Authorization")
    const token=authHeader && authHeader.split(" ")[1]

    if(token==null) return res.status(401).send()

    jwt.verify(token,config.jwt.secret_key,(error,user)=>{
        console.log("user",user)
        if(error) return res.sendStatus(403)
        req.user=user
    next()    
    })


}
module.exports={
    verifyToken
}