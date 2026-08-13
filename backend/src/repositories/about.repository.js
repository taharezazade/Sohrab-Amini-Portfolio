/** @format */

import prisma from "../config/prisma.js";

class AboutRepository {
  /* =========================================================
     FIND
  ========================================================= */

  async find() {
    return prisma.about.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  /* =========================================================
     FIND BY ID
  ========================================================= */

  async findById(id) {
    return prisma.about.findUnique({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     CREATE
  ========================================================= */

  async create(data) {
    return prisma.about.create({
      data,
    });
  }

  /* =========================================================
     UPDATE
  ========================================================= */

  async update(id, data) {
    return prisma.about.update({
      where: {
        id,
      },
      data,
    });
  }

  /* =========================================================
     DELETE
  ========================================================= */

  async delete(id) {
    return prisma.about.delete({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     COUNT
  ========================================================= */

  async count() {
    return prisma.about.count();
  }
}

export default new AboutRepository();
