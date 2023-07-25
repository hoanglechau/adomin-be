import express from "express";
import { getSales } from "../controllers/sales.js";

/**
 * @description This file contains the routes for the sales endpoints
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */

const router = express.Router();

router.get("/sales", getSales);

export default router;
