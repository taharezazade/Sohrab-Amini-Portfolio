/** @format */

import prisma from "../config/prisma.js";

class PortfolioImageRepository {
  async findAll() {
    return prisma.portfolioImage.findMany({
      include: {
        portfolio: {
          select: { id: true, title: true, slug: true },
        },
      },
      orderBy: [{ portfolioId: "asc" }, { order: "asc" }],
    });
  }

  async findByPortfolioId(portfolioId) {
    return prisma.portfolioImage.findMany({
      where: { portfolioId },
      orderBy: { order: "asc" },
    });
  }

  async findById(id) {
    return prisma.portfolioImage.findUnique({
      where: { id },
      include: {
        portfolio: {
          select: { id: true, title: true, slug: true },
        },
      },
    });
  }

  async create(data) {
    return prisma.portfolioImage.create({ data });
  }

  async createMany(data) {
    return prisma.portfolioImage.createMany({ data });
  }

  async update(id, data) {
    return prisma.portfolioImage.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return prisma.portfolioImage.delete({ where: { id } });
  }

  async deleteByPortfolioId(portfolioId) {
    return prisma.portfolioImage.deleteMany({
      where: { portfolioId },
    });
  }

  async countByPortfolioId(portfolioId) {
    return prisma.portfolioImage.count({
      where: { portfolioId },
    });
  }

  async updateOrder(id, order) {
    return prisma.portfolioImage.update({
      where: { id },
      data: { order },
    });
  }
}

export default new PortfolioImageRepository();
