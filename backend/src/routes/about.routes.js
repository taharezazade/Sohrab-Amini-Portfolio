/** @format */

import { Router } from "express";

import aboutController from "../controllers/about.controller.js";

const router = Router();

/* =========================================================
   GET ABOUT

   GET /api/about
========================================================= */

router.get("/", aboutController.get);

/* =========================================================
   UPDATE ABOUT

   PUT /api/about
========================================================= */

router.put("/", aboutController.update);

export default router;
