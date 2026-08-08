/** @format */

import prisma from "../config/prisma.js";

class PortfolioRepository {
  /* =========================================
      Get All Portfolios
  ========================================= */

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

  /* =========================================
      Get Published Portfolios
  ========================================= */

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
          order: "asc",
        },
        {
          createdAt: "desc",
        },
      ],
    });
  }

  /* =========================================
      Get Featured Portfolios
  ========================================= */

  async findFeatured() {
    return await prisma.portfolio.findMany({
      where: {
        featured: true,

        status: "PUBLISHED",
      },

      include: {
        images: true,
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

  /* =========================================
      Find By ID
  ========================================= */

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

  /* =========================================
      Find By Slug
  ========================================= */

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

  /* =========================================
      Create
  ========================================= */

  async create(data) {
    return await prisma.portfolio.create({
      data,

      include: {
        images: true,
      },
    });
  }

  /* =========================================
      Update
  ========================================= */

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

  /* =========================================
      Delete
  ========================================= */

  async delete(id) {
    return await prisma.portfolio.delete({
      where: {
        id,
      },
    });
  }

  /* =========================================
      Count
  ========================================= */

  async count() {
    return await prisma.portfolio.count();
  }

  /* =========================================
      Exists By ID
  ========================================= */

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

  /* =========================================
      Exists By Slug
  ========================================= */

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

  /* =========================================
      Update Status
  ========================================= */

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

  /* =========================================
      Toggle Featured
  ========================================= */

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

  /* =========================================
      Update Order
  ========================================= */

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

  /* =========================================
      Get Images
  ========================================= */

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

  /* =========================================
      Add Image
  ========================================= */

  async addImage(portfolioId, data) {
    return await prisma.portfolioImage.create({
      data: {
        ...data,

        portfolioId,
      },
    });
  }

  /* =========================================
      Update Image
  ========================================= */

  async updateImage(imageId, data) {
    return await prisma.portfolioImage.update({
      where: {
        id: imageId,
      },

      data,
    });
  }

  /* =========================================
      Delete Image
  ========================================= */

  async deleteImage(imageId) {
    return await prisma.portfolioImage.delete({
      where: {
        id: imageId,
      },
    });
  }

  /* =========================================
      Update Image Order
  ========================================= */

  async updateImageOrder(imageId, order) {
    return await prisma.portfolioImage.update({
      where: {
        id: imageId,
      },

      data: {
        order,
      },
    });
  }
}

export default new PortfolioRepository();
