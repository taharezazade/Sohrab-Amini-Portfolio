/** @format */

import prisma from "../config/prisma.js";

class HeroRepository {
  /* ============================
      Get Hero
  ============================ */

  async find() {
    return await prisma.hero.findFirst();
  }

  /* ============================
      Get By ID
  ============================ */

  async findById(id) {
    return await prisma.hero.findUnique({
      where: {
        id,
      },
    });
  }

  /* ============================
      Get Active Hero
  ============================ */

  async findActive() {
    return await prisma.hero.findFirst({
      where: {
        isActive: true,
      },
    });
  }

  /* ============================
      Create
  ============================ */

  async create(data) {
    return await prisma.hero.create({
      data,
    });
  }

  /* ============================
      Update
  ============================ */

  async update(id, data) {
    return await prisma.hero.update({
      where: {
        id,
      },
      data,
    });
  }

  /* ============================
      Upsert
  ============================ */

  async upsert(data) {
    const hero = await prisma.hero.findFirst();

    if (hero) {
      return await prisma.hero.update({
        where: {
          id: hero.id,
        },
        data,
      });
    }

    return await prisma.hero.create({
      data,
    });
  }

  /* ============================
      Toggle Active
  ============================ */

  async toggleStatus(id, isActive) {
    return await prisma.hero.update({
      where: {
        id,
      },
      data: {
        isActive,
      },
    });
  }

  /* ============================
      Delete
  ============================ */

  async delete(id) {
    return await prisma.hero.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Exists
  ============================ */

  async exists() {
    const hero = await prisma.hero.findFirst({
      select: {
        id: true,
      },
    });

    return !!hero;
  }

  /* ============================
      Count
  ============================ */

  async count() {
    return await prisma.hero.count();
  }
}

export default HeroRepository;
