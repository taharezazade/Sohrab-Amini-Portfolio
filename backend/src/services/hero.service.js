/** @format */

import heroRepository from "../repositories/hero.repository.js";

import {
  createHeroSchema,
  updateHeroSchema,
  heroParamsSchema,
  toggleHeroStatusSchema,
} from "../validations/hero.validation.js";

import ApiError from "../utils/ApiError.js";

/**
 * =========================================================
 * Hero Service
 * =========================================================
 *
 * Business logic for the Hero section.
 *
 * Controller
 *     ↓
 * Hero Service
 *     ↓
 * Hero Repository
 *     ↓
 * Prisma
 */

/**
 * Normalize nullable optional fields.
 *
 * Empty strings are converted to null so the database does
 * not contain unnecessary empty string values.
 */
const normalizeNullable = (value) => {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  if (typeof value === "string" && value.trim() === "") {
    return null;
  }

  return value;
};

/**
 * Build the database payload for Hero.
 */
const buildHeroData = (data) => {
  const payload = {
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    image: data.image,

    resume: normalizeNullable(data.resume),

    primaryButtonText: normalizeNullable(data.primaryButtonText),
    primaryButtonLink: normalizeNullable(data.primaryButtonLink),

    secondaryButtonText: normalizeNullable(data.secondaryButtonText),
    secondaryButtonLink: normalizeNullable(data.secondaryButtonLink),

    seoTitle: normalizeNullable(data.seoTitle),
    seoDescription: normalizeNullable(data.seoDescription),
  };

  if (data.isActive !== undefined) {
    payload.isActive = data.isActive;
  }

  return payload;
};

class HeroService {
  /**
   * =======================================================
   * Get Hero
   * =======================================================
   */
  async getHero() {
    const hero = await heroRepository.find();

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return hero;
  }

  /**
   * =======================================================
   * Get Hero By ID
   * =======================================================
   */
  async getHeroById(id) {
    const params = heroParamsSchema.parse({
      id,
    });

    const hero = await heroRepository.findById(params.id);

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return hero;
  }

  /**
   * =======================================================
   * Create Hero
   * =======================================================
   *
   * Only one Hero record is allowed.
   */
  async createHero(payload) {
    const data = createHeroSchema.parse(payload);

    const exists = await heroRepository.exists();

    if (exists) {
      throw new ApiError(409, "Hero section already exists.");
    }

    const heroData = buildHeroData({
      ...data,
      isActive: true,
    });

    const hero = await heroRepository.create(heroData);

    return hero;
  }

  /**
   * =======================================================
   * Update Hero
   * =======================================================
   */
  async updateHero(payload) {
    const data = updateHeroSchema.parse(payload);

    const hero = await heroRepository.find();

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    const heroData = buildHeroData({
      ...data,
      isActive: data.isActive ?? hero.isActive,
    });

    const updatedHero = await heroRepository.update(heroData);

    if (!updatedHero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return updatedHero;
  }

  /**
   * =======================================================
   * Upsert Hero
   * =======================================================
   *
   * If Hero exists:
   *     Update it.
   *
   * If Hero does not exist:
   *     Create it.
   */
  async upsertHero(payload) {
    const hero = await heroRepository.find();

    if (hero) {
      return await this.updateHero(payload);
    }

    return await this.createHero(payload);
  }

  /**
   * =======================================================
   * Toggle Hero Status
   * =======================================================
   */
  async toggleHeroStatus(payload) {
    const data = toggleHeroStatusSchema.parse(payload);

    const hero = await heroRepository.find();

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    const updatedHero = await heroRepository.update({
      isActive: data.isActive,
    });

    if (!updatedHero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return updatedHero;
  }

  /**
   * =======================================================
   * Delete Hero
   * =======================================================
   */
  async deleteHero() {
    const hero = await heroRepository.find();

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    const deletedHero = await heroRepository.delete();

    if (!deletedHero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return deletedHero;
  }
}

export default new HeroService();
