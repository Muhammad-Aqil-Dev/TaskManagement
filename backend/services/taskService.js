const {connDb}=require("../db/dbConnect")

const getAllTasks=async(user)=>{
    const conn=await connDb()

    let stmt="Select * from tasks where user_id =?"

    const [result]=await conn.execute(stmt,[user.id])
    return result;
}
const insertTask=async(user,task)=>{
    const conn=await connDb()

    let stmt="Insert into tasks (user_id,title,description) Values (?,?,?)"

    const [result]=await conn.execute(stmt,[user.id,task.title,task.description])
    return "Task created Successfully";
}
module.exports={
    getAllTasks,
    insertTask
}