/** @format */

import prisma from "../config/prisma.js";

class ServiceRepository {
  /* ============================
      Create
  ============================ */

  async create(data) {
    return await prisma.service.create({
      data,
    });
  }

  /* ============================
      Get All
  ============================ */

  async findAll() {
    return await prisma.service.findMany({
      orderBy: {
        order: "asc",
      },
    });
  }

  /* ============================
      Get Active
  ============================ */

  async findActive() {
    return await prisma.service.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        order: "asc",
      },
    });
  }

  /* ============================
      Get By ID
  ============================ */

  async findById(id) {
    return await prisma.service.findUnique({
      where: {
        id,
      },
    });
  }

  /* ============================
      Get By Slug
  ============================ */

  async findBySlug(slug) {
    return await prisma.service.findUnique({
      where: {
        slug,
      },
    });
  }

  /* ============================
      Update
  ============================ */

  async update(id, data) {
    return await prisma.service.update({
      where: {
        id,
      },
      data,
    });
  }

  /* ============================
      Delete
  ============================ */

  async delete(id) {
    return await prisma.service.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Toggle Active
  ============================ */

  async toggleStatus(id, isActive) {
    return await prisma.service.update({
      where: {
        id,
      },
      data: {
        isActive,
      },
    });
  }

  /* ============================
      Change Order
  ============================ */

  async updateOrder(id, order) {
    return await prisma.service.update({
      where: {
        id,
      },
      data: {
        order,
      },
    });
  }

  /* ============================
      Count
  ============================ */

  async count() {
    return await prisma.service.count();
  }

  /* ============================
      Exists By Slug
  ============================ */

  async existsBySlug(slug) {
    const service = await prisma.service.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
      },
    });

    return !!service;
  }

  /* ============================
      Exists By ID
  ============================ */

  async existsById(id) {
    const service = await prisma.service.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    return !!service;
  }
}

export default new ServiceRepository();
