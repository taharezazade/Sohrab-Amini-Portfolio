/** @format */

import prisma from "../config/prisma.js";

class PortfolioImageRepository {
  /* ============================
      Create Image
  ============================ */

  async create(portfolioId, data) {
    return await prisma.portfolioImage.create({
      data: {
        image: data.image,

        alt: data.alt ?? null,

        order: data.order ?? 0,

        portfolioId,
      },
    });
  }

  /* ============================
      Find All Images
  ============================ */

  async findAll(portfolioId) {
    return await prisma.portfolioImage.findMany({
      where: {
        portfolioId,
      },

      orderBy: {
        order: "asc",
      },
    });
  }

  /* ============================
      Find Image By ID
  ============================ */

  async findById(id) {
    return await prisma.portfolioImage.findUnique({
      where: {
        id,
      },
    });
  }

  /* ============================
      Update Image
  ============================ */

  async update(id, data) {
    return await prisma.portfolioImage.update({
      where: {
        id,
      },

      data: {
        ...(data.image !== undefined && {
          image: data.image,
        }),

        ...(data.alt !== undefined && {
          alt: data.alt,
        }),

        ...(data.order !== undefined && {
          order: data.order,
        }),
      },
    });
  }

  /* ============================
      Update Image Order
  ============================ */

  async updateOrder(id, order) {
    return await prisma.portfolioImage.update({
      where: {
        id,
      },

      data: {
        order,
      },
    });
  }

  /* ============================
      Delete Image
  ============================ */

  async delete(id) {
    return await prisma.portfolioImage.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Delete All Portfolio Images
  ============================ */

  async deleteByPortfolioId(portfolioId) {
    return await prisma.portfolioImage.deleteMany({
      where: {
        portfolioId,
      },
    });
  }

  /* ============================
      Count Images
  ============================ */

  async count(portfolioId) {
    return await prisma.portfolioImage.count({
      where: {
        portfolioId,
      },
    });
  }

  /* ============================
      Exists Image
  ============================ */

  async exists(id) {
    const image = await prisma.portfolioImage.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
      },
    });

    return Boolean(image);
  }
}

export default new PortfolioImageRepository();
