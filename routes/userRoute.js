import express from "express";
import { adminLogin, login, Register } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", Register);
userRouter.post("/admin", adminLogin);

export default userRouter;
