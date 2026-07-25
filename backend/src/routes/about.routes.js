/** @format */

import { Router } from "express";

import aboutController from "../controllers/about.controller.js";

const router = Router();

/* ============================
    Public Routes
============================ */

// Get About Information
router.get("/", aboutController.getAbout);

/* ============================
    Admin Routes
============================ */

// Create About Information
router.post("/", aboutController.createAbout);

// Update About Information
router.put("/", aboutController.updateAbout);

// Delete About Information
router.delete("/", aboutController.deleteAbout);

export default router;
