

const express=require('express')
const cors=require('cors');
const { authRouter } = require('./routes/authRoutes');
const config = require('./config/config1');
const { verifyToken } = require('./middleware/authMiddleware');
const { taskRouter } = require('./routes/taskRoutes');


const app=express();

app.use(cors())
app.use(express.json())


app.get("/test",(req,res)=>{
    res.send("Test Working")
})
app.get("/ptest",verifyToken,(req,res)=>{
    res.send("Test Working")
})


app.use("/auth",authRouter)
app.use("/tasks",verifyToken,taskRouter)

app.listen(config.server.port,()=>{
    console.log("It is working")
})