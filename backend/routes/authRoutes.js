const {Router} = require('express');
const { registerUser, logInUser } = require('../controllers/authcontroller');


const authRouter=Router();
authRouter.get("/",(req,res)=>{
    res.send("Auth Router working")
})
authRouter.post("/register",registerUser)
authRouter.post("/login",logInUser)


module.exports={
    authRouter
} 