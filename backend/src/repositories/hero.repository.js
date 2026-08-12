/** @format */

import prisma from "../config/prisma.js";

class HeroRepository {
  /**
   * =========================================================
   * Get Hero
   * =========================================================
   *
   * Returns the first Hero record.
   *
   * Since the application has only one Hero section,
   * the first record is treated as the active Hero configuration.
   */
  async find() {
    return await prisma.hero.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  /**
   * =========================================================
   * Get Hero By ID
   * =========================================================
   */
  async findById(id) {
    return await prisma.hero.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * =========================================================
   * Create Hero
   * =========================================================
   */
  async create(data) {
    return await prisma.hero.create({
      data,
    });
  }

  /**
   * =========================================================
   * Update Hero
   * =========================================================
   *
   * The Hero model is designed as a singleton section.
   * Therefore, update() automatically finds the existing
   * Hero and updates it by its ID.
   */
  async update(data) {
    const hero = await this.find();

    if (!hero) {
      return null;
    }

    return await prisma.hero.update({
      where: {
        id: hero.id,
      },
      data,
    });
  }

  /**
   * =========================================================
   * Update Hero By ID
   * =========================================================
   *
   * Useful when an explicit Hero ID is available.
   */
  async updateById(id, data) {
    const hero = await this.findById(id);

    if (!hero) {
      return null;
    }

    return await prisma.hero.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * =========================================================
   * Delete Hero
   * =========================================================
   */
  async delete() {
    const hero = await this.find();

    if (!hero) {
      return null;
    }

    return await prisma.hero.delete({
      where: {
        id: hero.id,
      },
    });
  }

  /**
   * =========================================================
   * Delete Hero By ID
   * =========================================================
   */
  async deleteById(id) {
    const hero = await this.findById(id);

    if (!hero) {
      return null;
    }

    return await prisma.hero.delete({
      where: {
        id,
      },
    });
  }

  /**
   * =========================================================
   * Hero Exists
   * =========================================================
   */
  async exists() {
    const hero = await prisma.hero.findFirst({
      select: {
        id: true,
      },
    });

    return Boolean(hero);
  }

  /**
   * =========================================================
   * Count Heroes
   * =========================================================
   *
   * Normally this should return either 0 or 1.
   * It is useful for detecting accidental duplicate Hero rows.
   */
  async count() {
    return await prisma.hero.count();
  }
}

export default new HeroRepository();
