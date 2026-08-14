/** @format */

import { Router } from "express";

import servicesController from "../controllers/services.controller.js";

const router = Router();

/* =========================================================
   PUBLIC
========================================================= */

router.get("/active", servicesController.getActive);

router.get("/technologies/search", servicesController.searchTechnologies);

/* =========================================================
   ADMIN / CMS
========================================================= */

router.get("/", servicesController.getAll);

router.get("/stats", servicesController.stats);

router.get("/:id", servicesController.getById);

router.post("/", servicesController.create);

router.put("/:id", servicesController.update);

router.delete("/:id", servicesController.delete);

router.patch("/:id/status", servicesController.toggleStatus);

router.patch("/reorder", servicesController.reorder);

export default router;
