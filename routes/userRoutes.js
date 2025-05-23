import express from "express";
import { regiter } from "../controler/userConmtroller.js";
import { sendMail } from "../controler/sendMail.js"

const userRoute = express.Router();

// GET


// POST

userRoute.post("/register",regiter)

userRoute.post("/send-email",sendMail)


// PUT


// DELETE





export default userRoute