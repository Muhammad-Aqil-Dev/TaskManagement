const {Router} =require("express");
const { getAllTasks,insertTask } = require("../controllers/taskController");

const router=Router();

router.get('/getTasks',getAllTasks)
router.post('/createTask',insertTask)

module.exports={
    taskRouter:router
} 