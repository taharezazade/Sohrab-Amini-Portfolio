/** @format */

import portfolioService from "../services/portfolio.service.js";

class PortfolioController {
  /* ============================
      Create Portfolio
  ============================ */

  async createPortfolio(req, res, next) {
    try {
      const portfolio = await portfolioService.createPortfolio(req.body);

      return res.status(201).json({
        success: true,

        message: "Portfolio created successfully",

        data: portfolio,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get All Portfolios
  ============================ */

  async getAllPortfolios(req, res, next) {
    try {
      const portfolios = await portfolioService.getAllPortfolios();

      return res.status(200).json({
        success: true,

        message: "Portfolios fetched successfully",

        data: portfolios,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Single Portfolio
  ============================ */

  async getPortfolioById(req, res, next) {
    try {
      const { id } = req.params;

      const portfolio = await portfolioService.getPortfolioById(id);

      return res.status(200).json({
        success: true,

        message: "Portfolio fetched successfully",

        data: portfolio,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Portfolio By Slug
  ============================ */

  async getPortfolioBySlug(req, res, next) {
    try {
      const { slug } = req.params;

      const portfolio = await portfolioService.getPortfolioBySlug(slug);

      return res.status(200).json({
        success: true,

        message: "Portfolio fetched successfully",

        data: portfolio,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update Portfolio
  ============================ */

  async updatePortfolio(req, res, next) {
    try {
      const { id } = req.params;

      const portfolio = await portfolioService.updatePortfolio(id, req.body);

      return res.status(200).json({
        success: true,

        message: "Portfolio updated successfully",

        data: portfolio,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete Portfolio
  ============================ */

  async deletePortfolio(req, res, next) {
    try {
      const { id } = req.params;

      const result = await portfolioService.deletePortfolio(id);

      return res.status(200).json({
        success: true,

        message: "Portfolio deleted successfully",

        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new PortfolioController();
