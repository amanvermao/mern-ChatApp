import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { getUsersForSidebar } from "../controlers/userControler.js";

const router = express.Router()

router.get('/', protectRoutes , getUsersForSidebar)
export default router