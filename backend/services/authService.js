const {connDb}=require("../db/dbConnect")
const jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt")
const config= require('../config/config')
const registerUser= async function(user){

    let mandatoryValues=["name","email","password"]
    let missingValue=false
    let errorMsg=""
    for(let key of mandatoryValues)
    {
        if(! user[key])
            {
                missingValue=true;
                errorMsg=`Missing ${key} Value`
                break;
            }
    
    }
    if(missingValue)
    {
        throw new Error(errorMsg);
        
    }
    let stmt=`Insert into users (name,email,password) Values (?,?,?)`
    const conn=await connDb()
    user.password=await bcrypt.hash(user.password, 10);
    const response=await conn.execute(stmt,[user.name,user.email,user.password])
    console.log(response)
    return "User registered Successfully"
}
const logInUser=async function(user){
    console.log(user,user.email,user.password)
    if(!(user && user.email && user.password))
    {
        throw new Error("Missing credentials");
        
    }

    let stmt=`Select * from users where email=?`
    const conn=await connDb()

    const [response]=await conn.execute(stmt,[user.email])
    let userFound=response[0];
    if(!userFound)
    {
        throw new Error("User Not Found");
        
    }
    const passwordMatch = await bcrypt.compare(user.password, userFound.password);
    if (!passwordMatch) {
        throw new Error("Authentication failed");
        ;
        }

    const accessToken=jwt.sign(userFound,config.jwt.secret_key)
    console.log("abcd",response)
    return accessToken
}

module.exports={
    registerUser,
    logInUser
}