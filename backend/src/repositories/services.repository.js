/** @format */

import prisma from "../config/prisma.js";

class ServicesRepository {
  /* =========================================================
     CREATE
  ========================================================= */

  async create(data) {
    return prisma.service.create({
      data,
    });
  }

  /* =========================================================
     FIND ALL
  ========================================================= */

  async findAll() {
    return prisma.service.findMany({
      orderBy: [
        {
          order: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
    });
  }

  /* =========================================================
     FIND ACTIVE
  ========================================================= */

  async findActive() {
    return prisma.service.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        order: "asc",
      },
    });
  }

  /* =========================================================
     FIND BY ID
  ========================================================= */

  async findById(id) {
    return prisma.service.findUnique({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     UPDATE
  ========================================================= */

  async update(id, data) {
    return prisma.service.update({
      where: {
        id,
      },
      data,
    });
  }

  /* =========================================================
     UPDATE ORDER
  ========================================================= */

  async updateOrder(id, order) {
    return prisma.service.update({
      where: {
        id,
      },
      data: {
        order,
      },
    });
  }

  /* =========================================================
     DELETE
  ========================================================= */

  async delete(id) {
    return prisma.service.delete({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     COUNT
  ========================================================= */

  async count() {
    return prisma.service.count();
  }

  async countActive() {
    return prisma.service.count({
      where: {
        isActive: true,
      },
    });
  }

  async countInactive() {
    return prisma.service.count({
      where: {
        isActive: false,
      },
    });
  }
}

export default new ServicesRepository();
