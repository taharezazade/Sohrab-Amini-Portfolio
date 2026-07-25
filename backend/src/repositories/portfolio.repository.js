/** @format */

import prisma from "../config/prisma.js";

class PortfolioRepository {
  /* ============================
      Create
  ============================ */

  async create(data) {
    return await prisma.portfolio.create({
      data,
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });
  }

  /* ============================
      Get All
  ============================ */

  async findAll() {
    return await prisma.portfolio.findMany({
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
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

  /* ============================
      Get Published
  ============================ */

  async findPublished() {
    return await prisma.portfolio.findMany({
      where: {
        status: "PUBLISHED",
      },
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
      orderBy: [
        {
          featured: "desc",
        },
        {
          order: "asc",
        },
      ],
    });
  }

  /* ============================
      Get Featured
  ============================ */

  async findFeatured() {
    return await prisma.portfolio.findMany({
      where: {
        featured: true,
        status: "PUBLISHED",
      },
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
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
    return await prisma.portfolio.findUnique({
      where: {
        id,
      },
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });
  }

  /* ============================
      Get By Slug
  ============================ */

  async findBySlug(slug) {
    return await prisma.portfolio.findUnique({
      where: {
        slug,
      },
      include: {
        images: {
          orderBy: {
            order: "asc",
          },
        },
      },
    });
  }

  /* ============================
      Update
  ============================ */

  async update(id, data) {
    return await prisma.portfolio.update({
      where: {
        id,
      },
      data,
      include: {
        images: true,
      },
    });
  }

  /* ============================
      Delete
  ============================ */

  async delete(id) {
    return await prisma.portfolio.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Change Status
  ============================ */

  async updateStatus(id, status) {
    return await prisma.portfolio.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  /* ============================
      Toggle Featured
  ============================ */

  async toggleFeatured(id, featured) {
    return await prisma.portfolio.update({
      where: {
        id,
      },
      data: {
        featured,
      },
    });
  }

  /* ============================
      Change Order
  ============================ */

  async updateOrder(id, order) {
    return await prisma.portfolio.update({
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
    return await prisma.portfolio.count();
  }

  /* ============================
      Exists By ID
  ============================ */

  async existsById(id) {
    const portfolio = await prisma.portfolio.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    return !!portfolio;
  }

  /* ============================
      Exists By Slug
  ============================ */

  async existsBySlug(slug) {
    const portfolio = await prisma.portfolio.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
      },
    });

    return !!portfolio;
  }

  /* ============================
      Images
  ============================ */

  async addImage(portfolioId, data) {
    return await prisma.portfolioImage.create({
      data: {
        portfolioId,
        ...data,
      },
    });
  }

  async updateImage(id, data) {
    return await prisma.portfolioImage.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteImage(id) {
    return await prisma.portfolioImage.delete({
      where: {
        id,
      },
    });
  }

  async findImages(portfolioId) {
    return await prisma.portfolioImage.findMany({
      where: {
        portfolioId,
      },
      orderBy: {
        order: "asc",
      },
    });
  }

  async updateImageOrder(id, order) {
    return await prisma.portfolioImage.update({
      where: {
        id,
      },
      data: {
        order,
      },
    });
  }
}

export default PortfolioRepository;
