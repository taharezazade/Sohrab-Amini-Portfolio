/** @format */

import heroRepository from "../repositories/hero.repository.js";

import {
  createHeroSchema,
  updateHeroSchema,
  heroParamsSchema,
} from "../validations/hero.validation.js";

import ApiError from "../utils/ApiError.js";

class HeroService {
  /* =========================================
      Get Hero
  ========================================= */

  async getHero() {
    const hero = await heroRepository.find();

    if (!hero) {
      throw new ApiError(404, "Hero section not found.");
    }

    return hero;
  }

  /* =========================================
      Get Hero By ID
  ========================================= */

  async getHeroById(id) {
    const params = heroParamsSchema.parse({
      id,
    });

    const hero = await heroRepository.findById(params.id);

    if (!hero) {
      throw new ApiError({
        statusCode: 404,
        message: "Hero section not found.",
      });
    }

    return hero;
  }

  /* =========================================
      Create Hero
  ========================================= */

  async createHero(payload) {
    const data = createHeroSchema.parse(payload);

    const exists = await heroRepository.exists();

    if (exists) {
      if (exists) {
        throw new ApiError({
          statusCode: 409,
          message: "Hero section already exists.",
        });
      }
    }

    const hero = await heroRepository.create({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      image: data.image,
      resume: data.resume ?? null,
      isActive: true,
    });

    return hero;
  }

  /* =========================================
      Update Hero
  ========================================= */

  async updateHero(payload) {
    const data = updateHeroSchema.parse(payload);

    const hero = await heroRepository.find();

    console.log("FOUND HERO:", hero);

    if (!hero) {
      if (!hero) {
        throw new ApiError({
          statusCode: 404,
          message: "Hero section not found.",
        });
      }
    }

    const updatedHero = await heroRepository.update({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      image: data.image,
      resume: data.resume ?? null,
      isActive: data.isActive ?? hero.isActive,
    });

    return updatedHero;
  }

  /* =========================================
      Upsert Hero
  ========================================= */

  async upsertHero(payload) {
    const hero = await heroRepository.find();

    if (hero) {
      return await this.updateHero(payload);
    }

    return await this.createHero(payload);
  }

  /* =========================================
      Delete Hero
  ========================================= */

  async deleteHero() {
    const hero = await heroRepository.find();

    if (!hero) {
      if (!hero) {
        throw new ApiError({
          statusCode: 404,
          message: "Hero section not found.",
        });
      }
    }

    await heroRepository.delete();

    return null;
  }
}

export default new HeroService();
