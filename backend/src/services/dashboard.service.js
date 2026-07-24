/** @format */

import dashboardRepository from "../repositories/dashboard.repository.js";

import ApiResponse from "../utils/ApiResponse.js";

class DashboardService {
  /* =========================================
      Dashboard Statistics
  ========================================= */

  async getStatistics() {
    const stats = await dashboardRepository.getStatistics();

    return new ApiResponse(
      200,
      stats,
      "Dashboard statistics fetched successfully.",
    );
  }

  /* =========================================
      Dashboard Overview
  ========================================= */

  async getOverview() {
    const [services, portfolios, hero, about, contact, setting] =
      await Promise.all([
        dashboardRepository.countServices(),
        dashboardRepository.countPortfolios(),
        dashboardRepository.hasHero(),
        dashboardRepository.hasAbout(),
        dashboardRepository.hasContact(),
        dashboardRepository.hasSetting(),
      ]);

    return new ApiResponse(
      200,
      {
        services,
        portfolios,

        sections: {
          hero,
          about,
          contact,
          setting,
        },
      },
      "Dashboard overview fetched successfully.",
    );
  }

  /* =========================================
      Portfolio Statistics
  ========================================= */

  async getPortfolioStatistics() {
    const stats = await dashboardRepository.getPortfolioStatistics();

    return new ApiResponse(
      200,
      stats,
      "Portfolio statistics fetched successfully.",
    );
  }

  /* =========================================
      Latest Portfolio Projects
  ========================================= */

  async getLatestProjects(limit = 5) {
    const projects = await dashboardRepository.getLatestProjects(limit);

    return new ApiResponse(
      200,
      projects,
      "Latest projects fetched successfully.",
    );
  }

  /* =========================================
      Dashboard Cards
  ========================================= */

  async getCards() {
    const cards = await dashboardRepository.getCards();

    return new ApiResponse(200, cards, "Dashboard cards fetched successfully.");
  }

  /* =========================================
      Recent Activity
  ========================================= */

  async getRecentActivity(limit = 10) {
    const activity = await dashboardRepository.getRecentActivity(limit);

    return new ApiResponse(
      200,
      activity,
      "Recent activity fetched successfully.",
    );
  }

  /* =========================================
      Health Check
  ========================================= */

  async health() {
    return new ApiResponse(
      200,
      {
        status: "healthy",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
      },
      "Dashboard service is healthy.",
    );
  }
}

export default new DashboardService();
