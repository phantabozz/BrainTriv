import { authController } from "@/controllers/authController";
import express, { type Express, type Request, type Response } from "express"

const authRouter = express.Router();

authRouter.post("/login", authController.login);

authRouter.post("/register", authController.register);


export { authRouter };