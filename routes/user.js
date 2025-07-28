import express from "express";
import { register,login,getMyProfile, logout } from "../controllers/user.js";
import {isAuthenticated} from "../middlewares/auth.js";
const router=express.Router();


router.post("/now",register);

router.post("/login",login);

router.get("/logout",logout);


router.get("/me",isAuthenticated,getMyProfile);


export default router;