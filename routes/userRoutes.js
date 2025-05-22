import express from "express";
import { regiter } from "../controler/userConmtroller.js";

const userRoute = express.Router();

// GET


// POST

userRoute.post("/register",regiter)


// PUT


// DELETE





export default userRoute