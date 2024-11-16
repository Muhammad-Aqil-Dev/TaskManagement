const authService= require('../services/authService');


const registerUser=async function(req,res){
    try {
        let body=req.body
        console.log(body)
        if(!body)
            throw new Error("Missing Body");
            
        let user={name:body.name,email:body.email,password:body.password}
        const result=await authService.registerUser(user)
        res.send(result)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const logInUser=async function(req,res){
    try {
        const {email,password}=req.body
        let user={email,password}
       const response= await authService.logInUser(user)
       res.send(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    registerUser,
    logInUser
}