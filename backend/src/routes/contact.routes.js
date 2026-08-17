/** @format */

import { Router } from "express";

import contactController from "../controllers/contact.controller.js";

const router = Router();

/* =========================================================
   Public
========================================================= */

router.get("/", contactController.getContact);

router.get("/exists", contactController.exists);

router.get("/count", contactController.count);

router.get("/:id", contactController.getById);

/* =========================================================
   Admin
========================================================= */

router.post("/", contactController.create);

/*
 * Main Admin save endpoint.
 *
 * PUT /api/contact
 *
 * Creates the first Contact record
 * or updates the existing one.
 */

router.put("/", contactController.upsert);

router.put("/:id", contactController.update);

router.patch("/:id/phone", contactController.updatePhone);

router.patch("/:id/whatsapp", contactController.updateWhatsapp);

router.patch("/:id/image", contactController.updateImage);

router.delete("/:id/image", contactController.clearImage);

router.delete("/:id", contactController.delete);

export default router;
