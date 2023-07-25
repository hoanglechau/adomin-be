import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

/**
 * @description This file contains the routes for the management endpoints
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
