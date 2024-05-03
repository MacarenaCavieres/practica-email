import { Router } from "express";
import { methodMail } from "../controllers/email.controller.js";

const router = Router();

router.post("/", methodMail.sendEmail);

export default router;
