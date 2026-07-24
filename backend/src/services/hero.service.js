/** @format */

import heroRepository from "../repositories/hero.repository.js";

import {
  createHeroSchema,
  updateHeroSchema,
  heroParamsSchema,
  toggleHeroStatusSchema,
} from "../validations/hero.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class HeroService {
  /* =========================================
        Get Hero
    ========================================= */

  async getHero() {
    const hero = await heroRepository.find();

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return new ApiResponse(200, hero, "Hero section fetched successfully.");
  }

  /* =========================================
        Get Hero By ID
    ========================================= */

  async getHeroById(id) {
    heroParamsSchema.parse({ id });

    const hero = await heroRepository.findById(id);

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return new ApiResponse(200, hero, "Hero section fetched successfully.");
  }

  /* =========================================
        Create Hero
    ========================================= */

  async createHero(payload) {
    const data = createHeroSchema.parse(payload);

    const exists = await heroRepository.exists();

    if (exists) {
      throw new ApiError(409, "Hero section already exists.");
    }

    const hero = await heroRepository.create({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      image: data.image,
      resume: data.resume,
    });

    return new ApiResponse(201, hero, "Hero section created successfully.");
  }

  /* =========================================
        Update Hero
    ========================================= */

  async updateHero(id, payload) {
    heroParamsSchema.parse({ id });

    const data = updateHeroSchema.parse(payload);

    const hero = await heroRepository.findById(id);

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    const updatedHero = await heroRepository.update(id, {
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      image: data.image,
      resume: data.resume,
      isActive: data.isActive,
    });

    return new ApiResponse(
      200,
      updatedHero,
      "Hero section updated successfully.",
    );
  }

  /* =========================================
    Toggle Hero Status
========================================= */

  async toggleStatus(id, payload) {
    heroParamsSchema.parse({ id });

    const data = toggleHeroStatusSchema.parse(payload);

    const hero = await heroRepository.findById(id);

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    const updatedHero = await heroRepository.update(id, {
      isActive: data.isActive,
    });

    return new ApiResponse(
      200,
      updatedHero,
      `Hero section ${
        data.isActive ? "activated" : "deactivated"
      } successfully.`,
    );
  }

  /* =========================================
        Activate Hero
    ========================================= */

  async activateHero(id) {
    heroParamsSchema.parse({ id });

    const hero = await heroRepository.findById(id);

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    const updatedHero = await heroRepository.update(id, {
      isActive: true,
    });

    return new ApiResponse(
      200,
      updatedHero,
      "Hero section activated successfully.",
    );
  }

  /* =========================================
        Deactivate Hero
    ========================================= */

  async deactivateHero(id) {
    heroParamsSchema.parse({ id });

    const hero = await heroRepository.findById(id);

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    const updatedHero = await heroRepository.update(id, {
      isActive: false,
    });

    return new ApiResponse(
      200,
      updatedHero,
      "Hero section deactivated successfully.",
    );
  }

  /* =========================================
        Upsert Hero
    ========================================= */

  async upsertHero(payload) {
    const data = updateHeroSchema.parse(payload);

    const hero = await heroRepository.upsert({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      image: data.image,
      resume: data.resume,
      isActive: data.isActive ?? true,
    });

    return new ApiResponse(200, hero, "Hero section saved successfully.");
  }

  /* =========================================
        Delete Hero
    ========================================= */

  async deleteHero(id) {
    heroParamsSchema.parse({ id });

    const hero = await heroRepository.findById(id);

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    await heroRepository.delete(id);

    return new ApiResponse(200, null, "Hero section deleted successfully.");
  }

  /* =========================================
        Hero Exists
    ========================================= */

  async exists() {
    const exists = await heroRepository.exists();

    return new ApiResponse(
      200,
      {
        exists,
      },
      "Hero existence checked successfully.",
    );
  }

  /* =========================================
        Hero Count
    ========================================= */

  async count() {
    const total = await heroRepository.count();

    return new ApiResponse(
      200,
      {
        total,
      },
      "Hero count fetched successfully.",
    );
  }
}
export default new HeroService();
