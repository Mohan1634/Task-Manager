import express from "express";
import {config} from "dotenv";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import taskRoute from "./routes/task.js";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";
export const app=express();

config({
    path:"./data/config.env",
})
//using Middle Wares 
app.use(express.json());
app.use(cookieParser());
//by default cross origin sharing is blocked by browser
//diff origin means (method + domain + port)
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    //from frontend cookies send 
    credentials:true,
}))


//using Routes
app.use("/api/v1/users",userRoute);
app.use("/api/v1/task",taskRoute);

//using ErrorMiddleware
app.use(errorMiddleWare);
