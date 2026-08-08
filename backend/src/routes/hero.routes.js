/** @format */

import { Router } from "express";

import {
  getHero,
  createHero,
  updateHero,
  deleteHero,
} from "../controllers/hero.controller.js";

const router = Router();

/* ============================
    Public Routes
============================ */

/*
    Get Hero Information
*/
router.get("/", getHero);

/* ============================
    Admin Routes
============================ */

/*
    Create Hero Information
*/
router.post("/", createHero);

/*
    Update Hero Information
*/
router.put("/", updateHero);

/*
    Delete Hero Information
*/
router.delete("/", deleteHero);

export default router;
