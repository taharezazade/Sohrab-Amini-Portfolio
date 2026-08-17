/** @format */

import prisma from "../config/prisma.js";

const imageInclude = {
  images: {
    orderBy: { order: "asc" },
  },
};

class PortfolioRepository {
  async findAll() {
    return prisma.portfolio.findMany({
      include: imageInclude,
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
  }

  async findPublished() {
    return prisma.portfolio.findMany({
      where: { status: "PUBLISHED" },
      include: imageInclude,
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
  }

  async findFeatured() {
    return prisma.portfolio.findMany({
      where: { featured: true },
      include: imageInclude,
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
  }

  async findById(id) {
    return prisma.portfolio.findUnique({
      where: { id },
      include: imageInclude,
    });
  }

  async findBySlug(slug) {
    return prisma.portfolio.findUnique({
      where: { slug },
      include: imageInclude,
    });
  }

  async findByCategory(category) {
    return prisma.portfolio.findMany({
      where: { category },
      include: imageInclude,
      orderBy: { order: "asc" },
    });
  }

  async create(data) {
    return prisma.portfolio.create({
      data,
      include: imageInclude,
    });
  }

  async update(id, data) {
    return prisma.portfolio.update({
      where: { id },
      data,
      include: imageInclude,
    });
  }

  async delete(id) {
    return prisma.portfolio.delete({ where: { id } });
  }

  async existsById(id) {
    const row = await prisma.portfolio.findUnique({
      where: { id },
      select: { id: true },
    });

    return Boolean(row);
  }

  async existsBySlug(slug, excludeId = null) {
    const row = await prisma.portfolio.findFirst({
      where: {
        slug,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
      select: { id: true },
    });

    return Boolean(row);
  }

  async count(where = {}) {
    return prisma.portfolio.count({ where });
  }

  async updateStatus(id, status) {
    return prisma.portfolio.update({
      where: { id },
      data: { status },
      include: imageInclude,
    });
  }

  async updateFeatured(id, featured) {
    return prisma.portfolio.update({
      where: { id },
      data: { featured },
      include: imageInclude,
    });
  }

  async updateOrder(id, order) {
    return prisma.portfolio.update({
      where: { id },
      data: { order },
      include: imageInclude,
    });
  }
}

export default new PortfolioRepository();
