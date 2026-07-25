/** @format */

import { Router } from "express";

import servicesController from "../controllers/services.controller.js";

const router = Router();

/* ============================
    Public Routes
============================ */

/*
    Get All Services
*/
router.get("/", servicesController.getAllServices);

/*
    Get Active Services
*/
router.get("/active", servicesController.getActiveServices);

/*
    Get Single Service
*/
router.get("/:id", servicesController.getServiceById);

/* ============================
    Admin Routes
============================ */

/*
    Create Service
*/
router.post("/", servicesController.createService);

/*
    Update Service
*/
router.put("/:id", servicesController.updateService);

/*
    Delete Service
*/
router.delete("/:id", servicesController.deleteService);

/*
    Toggle Active Status
*/
router.patch("/:id/toggle", servicesController.toggleServiceStatus);

/*
    Reorder Services
*/
router.patch("/reorder", servicesController.reorderServices);

export default router;
