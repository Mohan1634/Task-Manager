import express from "express";
import {deleteTask, getMyTask, newTask, updateTask} from "../controllers/task.js"
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();
//These three Routes are similar 
// but as /new and /my are first
//the routes except them will go to /:id
router.post("/new",isAuthenticated,newTask);

router.get("/my",isAuthenticated,getMyTask);

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)


export default router;