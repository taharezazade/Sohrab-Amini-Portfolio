/** @format */

import prisma from "../config/prisma.js";

class DashboardRepository {
  /* ============================
      Dashboard Statistics
  ============================ */

  async getStatistics() {
    const [
      totalServices,
      totalPortfolio,
      publishedPortfolio,
      draftPortfolio,
      archivedPortfolio,
    ] = await Promise.all([
      prisma.service.count(),

      prisma.portfolio.count(),

      prisma.portfolio.count({
        where: {
          status: "PUBLISHED",
        },
      }),

      prisma.portfolio.count({
        where: {
          status: "DRAFT",
        },
      }),

      prisma.portfolio.count({
        where: {
          status: "ARCHIVED",
        },
      }),
    ]);

    return {
      totalServices,
      totalPortfolio,
      publishedPortfolio,
      draftPortfolio,
      archivedPortfolio,
    };
  }

  /* ============================
      Latest Portfolio
  ============================ */

  async latestPortfolio(limit = 5) {
    return await prisma.portfolio.findMany({
      take: limit,

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        title: true,
        slug: true,
        thumbnail: true,
        status: true,
        featured: true,
        createdAt: true,
      },
    });
  }

  /* ============================
      Latest Services
  ============================ */

  async latestServices(limit = 5) {
    return await prisma.service.findMany({
      take: limit,

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        isActive: true,
        createdAt: true,
      },
    });
  }
}

export default new DashboardRepository();
