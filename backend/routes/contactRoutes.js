import express from "express";
import { submitContact } from "../controllers/contactControllers.js";

const router = express.Router();

router.post("/contact", submitContact);

export default router;
