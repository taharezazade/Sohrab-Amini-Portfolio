/** @format */

import { Router } from "express";

import heroController from "../controllers/hero.controller.js";

const router = Router();

/* ============================
    Public Routes
============================ */

/*
    Get Hero Information
*/
router.get("/", heroController.getHero);

/* ============================
    Admin Routes
============================ */

/*
    Create Hero Information
*/
router.post("/", heroController.createHero);

/*
    Update Hero Information
*/
router.put("/", heroController.updateHero);

/*
    Delete Hero Information
*/
router.delete("/", heroController.deleteHero);

export default router;
