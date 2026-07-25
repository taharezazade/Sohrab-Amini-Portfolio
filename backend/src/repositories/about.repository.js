/** @format */

import prisma from "../config/prisma.js";

class AboutRepository {
  /* ============================
      Get About
  ============================ */

  async find() {
    return await prisma.about.findFirst();
  }

  /* ============================
      Get By ID
  ============================ */

  async findById(id) {
    return await prisma.about.findUnique({
      where: {
        id,
      },
    });
  }

  /* ============================
      Create
  ============================ */

  async create(data) {
    return await prisma.about.create({
      data,
    });
  }

  /* ============================
      Update
  ============================ */

  async update(id, data) {
    return await prisma.about.update({
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
    const about = await prisma.about.findFirst();

    if (about) {
      return await prisma.about.update({
        where: {
          id: about.id,
        },
        data,
      });
    }

    return await prisma.about.create({
      data,
    });
  }

  /* ============================
      Delete
  ============================ */

  async delete(id) {
    return await prisma.about.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Exists
  ============================ */

  async exists() {
    const about = await prisma.about.findFirst({
      select: {
        id: true,
      },
    });

    return !!about;
  }

  /* ============================
      Count
  ============================ */

  async count() {
    return await prisma.about.count();
  }
}

export default AboutRepository;
