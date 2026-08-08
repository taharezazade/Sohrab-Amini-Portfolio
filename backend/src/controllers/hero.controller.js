/** @format */

import heroService from "../services/hero.service.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

/* =========================================
    Get Hero
========================================= */

export const getHero = asyncHandler(async (req, res) => {
  const hero = await heroService.getHero();

  console.log("HERO DATA:", hero);

  return res
    .status(200)
    .json(ApiResponse.ok(hero, "Hero section fetched successfully."));
});

/* =========================================
    Get Hero By ID
========================================= */

export const getHeroById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const hero = await heroService.getHeroById(id);

  return res
    .status(200)
    .json(ApiResponse.ok(hero, "Hero section fetched successfully."));
});

/* =========================================
    Create Hero
========================================= */

export const createHero = asyncHandler(async (req, res) => {
  const hero = await heroService.createHero(req.body);

  return res
    .status(201)
    .json(ApiResponse.created(hero, "Hero section created successfully."));
});

/* =========================================
    Update Hero
========================================= */

export const updateHero = asyncHandler(async (req, res) => {
  const hero = await heroService.updateHero(req.body);

  return res
    .status(200)
    .json(ApiResponse.updated(hero, "Hero section updated successfully."));
});

/* =========================================
    Upsert Hero
========================================= */

export const upsertHero = asyncHandler(async (req, res) => {
  const hero = await heroService.upsertHero(req.body);

  return res
    .status(200)
    .json(ApiResponse.updated(hero, "Hero section saved successfully."));
});

/* =========================================
    Delete Hero
========================================= */

export const deleteHero = asyncHandler(async (req, res) => {
  await heroService.deleteHero();

  return res
    .status(200)
    .json(ApiResponse.deleted("Hero section deleted successfully."));
});
