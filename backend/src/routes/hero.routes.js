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

/* =========================================================
   Public
========================================================= */

router.get("/", getHero);

/* =========================================================
   Admin
========================================================= */

router.post("/", createHero);

router.put("/", updateHero);

router.put("/upsert", upsertHero);

router.patch("/status", toggleHeroStatus);

router.delete("/", deleteHero);

/* =========================================================
   Dynamic
========================================================= */

router.get("/:id", getHeroById);

export default router;
