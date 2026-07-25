/** @format */

import dashboardService from "../services/dashboard.service.js";

class DashboardController {
  /* ============================
      Get Dashboard Statistics
  ============================ */

  async getDashboardStats(req, res, next) {
    try {
      const stats = await dashboardService.getDashboardStats();

      return res.status(200).json({
        success: true,

        message: "Dashboard statistics fetched successfully",

        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Dashboard Overview
  ============================ */

  async getOverview(req, res, next) {
    try {
      const overview = await dashboardService.getOverview();

      return res.status(200).json({
        success: true,

        message: "Dashboard overview fetched successfully",

        data: overview,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Recent Activities
  ============================ */

  async getRecentActivities(req, res, next) {
    try {
      const activities = await dashboardService.getRecentActivities();

      return res.status(200).json({
        success: true,

        message: "Recent activities fetched successfully",

        data: activities,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new DashboardController();
