/** @format */

import { Router } from "express";

import {
  getHero,
  getHeroById,
  createHero,
  updateHero,
  upsertHero,
  toggleHeroStatus,
  deleteHero,
} from "../controllers/hero.controller.js";

const router = Router();

/**
 * =========================================================
 * Public Routes
 * =========================================================
 */

/**
 * GET /api/hero
 */
router.get("/", getHero);

/**
 * =========================================================
 * Admin Routes
 * =========================================================
 */

/**
 * POST /api/hero
 */
router.post("/", createHero);

/**
 * PUT /api/hero
 */
router.put("/", updateHero);

/**
 * PUT /api/hero/upsert
 */
router.put("/upsert", upsertHero);

/**
 * PATCH /api/hero/status
 */
router.patch("/status", toggleHeroStatus);

/**
 * DELETE /api/hero
 */
router.delete("/", deleteHero);

/**
 * =========================================================
 * Dynamic Routes
 * =========================================================
 */

/**
 * GET /api/hero/:id
 */
router.get("/:id", getHeroById);

export default router;
