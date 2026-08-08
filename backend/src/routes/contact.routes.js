/** @format */

import { Router } from "express";

import contactController from "../controllers/contact.controller.js";

const router = Router();

/* =========================================================
   Public / General
========================================================= */

/*
   Get Contact
   GET /api/contact
*/
router.get("/", contactController.getContact);

/*
   Check Contact Exists
   GET /api/contact/exists
*/
router.get("/exists", contactController.exists);

/*
   Get Contact Count
   GET /api/contact/count
*/
router.get("/count", contactController.count);

/* =========================================================
   Admin
========================================================= */

/*
   Create Contact
   POST /api/contact
*/
router.post("/", contactController.create);

/*
   Upsert Contact
   PUT /api/contact
*/
router.put("/", contactController.upsert);

/*
   Get Contact By ID
   GET /api/contact/:id
*/
router.get("/:id", contactController.getById);

/*
   Update Contact By ID
   PUT /api/contact/:id
*/
router.put("/:id", contactController.update);

/*
   Update Contact Image
   PATCH /api/contact/:id/image
*/
router.patch("/:id/image", contactController.updateImage);

/*
   Delete Contact
   DELETE /api/contact/:id
*/
router.delete("/:id", contactController.delete);

export default router;
