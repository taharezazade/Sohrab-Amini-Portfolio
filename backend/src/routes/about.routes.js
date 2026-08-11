/** @format */

import { Router } from "express";

import aboutController from "../controllers/about.controller.js";

const router = Router();

/* =========================================================
   PUBLIC / GENERAL
========================================================= */

/*
GET
/api/about
*/

router.get("/", aboutController.getAbout);

/*
GET
/api/about/exists
*/

router.get("/exists", aboutController.exists);

/*
GET
/api/about/count
*/

router.get("/count", aboutController.count);

/* =========================================================
   CREATE
========================================================= */

/*
POST
/api/about
*/

router.post("/", aboutController.createAbout);

/* =========================================================
   UPDATE SINGLETON
========================================================= */

/*
PUT
/api/about

Updates the current About record.
*/

router.put("/", aboutController.updateAbout);

/* =========================================================
   UPSERT
========================================================= */

/*
POST
/api/about/upsert

Creates About if it doesn't exist.
Updates About if it exists.
*/

router.post("/upsert", aboutController.upsertAbout);

/* =========================================================
   DELETE SINGLETON
========================================================= */

/*
DELETE
/api/about
*/

router.delete("/", aboutController.deleteAbout);

/* =========================================================
   ID BASED ROUTES
========================================================= */

/*
GET
/api/about/:id
*/

router.get("/:id", aboutController.getAboutById);

/*
PUT
/api/about/:id
*/

router.put("/:id", aboutController.updateAboutById);

/*
DELETE
/api/about/:id
*/

router.delete("/:id", aboutController.deleteAboutById);

/* =========================================================
   IMAGE
========================================================= */

/*
PUT
/api/about/:id/image
*/

router.put("/:id/image", aboutController.updateImage);

/*
DELETE
/api/about/:id/image
*/

router.delete("/:id/image", aboutController.clearImage);

export default router;
