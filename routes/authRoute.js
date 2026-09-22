import { login, register } from "../controllers/authController";
import express from "express";

authRoute.post("/login", login);
authRoute.post("/register", register);

const authRoute = express.Router();
