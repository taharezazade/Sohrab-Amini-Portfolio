/** @format */

import prisma from "../config/prisma.js";

class HeroRepository {
  /* =========================================
      Get Hero
  ========================================= */

  async find() {
    return await prisma.hero.findFirst();
  }

  /* =========================================
      Create Hero
  ========================================= */

  async create(data) {
    return await prisma.hero.create({
      data,
    });
  }

  /* =========================================
      Update Hero
  ========================================= */

  async update(data) {
    const hero = await this.find();

    console.log("REPOSITORY HERO:", hero);
    console.log("UPDATE DATA:", data);

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

  /* =========================================
      Delete Hero
  ========================================= */

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

  /* =========================================
      Hero Exists
  ========================================= */

  async exists() {
    const hero = await prisma.hero.findFirst({
      select: {
        id: true,
      },
    });

    return Boolean(hero);
  }
}

export default new HeroRepository();
