/** @format */

import { Router } from "express";

import settingsController from "../controllers/settings.controller.js";

const router = Router();

/* =========================================================
   GET SETTINGS
========================================================= */

// Get main website settings
router.get("/", settingsController.getSettings);

/* =========================================================
   GET EXISTS
========================================================= */

// Check whether settings exist
router.get("/exists", settingsController.exists);

/* =========================================================
   GET COUNT
========================================================= */

// Get settings count
router.get("/count", settingsController.count);

/* =========================================================
   POST CREATE SETTINGS
========================================================= */

// Create initial settings
router.post("/", settingsController.createSettings);

/* =========================================================
   GET SETTINGS BY ID
========================================================= */

// Get settings by ID
router.get("/:id", settingsController.getSettingsById);

/* =========================================================
   PUT UPDATE SETTINGS
========================================================= */

// Update general settings
router.put("/:id", settingsController.updateSettings);

/* =========================================================
   PUT UPDATE BRANDING
========================================================= */

// Update logo and favicon
router.put("/:id/branding", settingsController.updateBranding);

/* =========================================================
   PUT UPDATE SEO
========================================================= */

// Update SEO settings
router.put("/:id/seo", settingsController.updateSEO);

/* =========================================================
   PUT UPDATE SOCIAL
========================================================= */

// Update social links
router.put("/:id/social", settingsController.updateSocial);

/* =========================================================
   PUT UPDATE SECURITY
========================================================= */

// Update security settings
router.put("/:id/security", settingsController.updateSecurity);

/* =========================================================
   DELETE SETTINGS
========================================================= */

// Delete settings
router.delete("/:id", settingsController.deleteSettings);

export default router;
