/** @format */

import { Router } from "express";

import searchController from "../controllers/search.controller.js";

const router = Router();

/**
 * GET /api/search?q=wordpress
 */
router.get("/", (req, res) => searchController.search(req, res));

export default router;
