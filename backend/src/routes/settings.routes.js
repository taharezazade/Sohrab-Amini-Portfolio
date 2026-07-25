/** @format */

import { Router } from "express";

import settingsController from "../controllers/settings.controller.js";

const router = Router();

/* ============================
    Public Routes
============================ */

/*
    Get Website Settings
*/
router.get("/", settingsController.getSettings);

/* ============================
    Admin Routes
============================ */

/*
    Create Initial Settings
*/
router.post("/", settingsController.createSettings);

/*
    Update General Settings

    تغییر:
    - Site Name
    - Description
    - Contact Info
*/
router.put("/", settingsController.updateSettings);

/*
    Update SEO Settings
*/
router.patch("/seo", settingsController.updateSEO);

/*
    Update Social Links
*/
router.patch("/social", settingsController.updateSocialLinks);

/*
    Delete Settings
*/
router.delete("/", settingsController.deleteSettings);

export default router;
