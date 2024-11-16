const taskService=require("../services/taskService")


const getAllTasks=async(req,res)=>{
    try {
        let user=req.user
        const result=await taskService.getAllTasks(user)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}
const insertTask=async(req,res)=>{
    try {
        let user=req.user
        let task=req.body
        const result=await taskService.insertTask(user,req.body)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
}

module.exports={
    getAllTasks,
    insertTask
}