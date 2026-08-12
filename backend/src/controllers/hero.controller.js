/** @format */

import heroService from "../services/hero.service.js";

import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

/**
 * =========================================================
 * Get Hero
 * =========================================================
 *
 * GET /api/hero
 */
export const getHero = asyncHandler(async (req, res) => {
  const hero = await heroService.getHero();

  return res
    .status(200)
    .json(ApiResponse.ok(hero, "Hero section fetched successfully."));
});

/**
 * =========================================================
 * Get Hero By ID
 * =========================================================
 *
 * GET /api/hero/:id
 */
export const getHeroById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const hero = await heroService.getHeroById(id);

  return res
    .status(200)
    .json(ApiResponse.ok(hero, "Hero section fetched successfully."));
});

/**
 * =========================================================
 * Create Hero
 * =========================================================
 *
 * POST /api/hero
 */
export const createHero = asyncHandler(async (req, res) => {
  const hero = await heroService.createHero(req.body);

  return res
    .status(201)
    .json(ApiResponse.created(hero, "Hero section created successfully."));
});

/**
 * =========================================================
 * Update Hero
 * =========================================================
 *
 * PUT /api/hero
 */
export const updateHero = asyncHandler(async (req, res) => {
  const hero = await heroService.updateHero(req.body);

  return res
    .status(200)
    .json(ApiResponse.updated(hero, "Hero section updated successfully."));
});

/**
 * =========================================================
 * Upsert Hero
 * =========================================================
 *
 * PUT /api/hero/upsert
 */
export const upsertHero = asyncHandler(async (req, res) => {
  const hero = await heroService.upsertHero(req.body);

  return res
    .status(200)
    .json(ApiResponse.updated(hero, "Hero section saved successfully."));
});

/**
 * =========================================================
 * Toggle Hero Status
 * =========================================================
 *
 * PATCH /api/hero/status
 */
export const toggleHeroStatus = asyncHandler(async (req, res) => {
  const hero = await heroService.toggleHeroStatus(req.body);

  return res
    .status(200)
    .json(ApiResponse.updated(hero, "Hero status updated successfully."));
});

/**
 * =========================================================
 * Delete Hero
 * =========================================================
 *
 * DELETE /api/hero
 */
export const deleteHero = asyncHandler(async (req, res) => {
  await heroService.deleteHero();

  return res
    .status(200)
    .json(ApiResponse.deleted("Hero section deleted successfully."));
});
