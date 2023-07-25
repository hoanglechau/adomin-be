import express from "express";
import { getUser, getDashboardStats } from "../controllers/general.js";

/**
 * @description This file contains the routes for the general endpoints
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
