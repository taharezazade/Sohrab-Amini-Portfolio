/** @format */

import portfolioService from "../services/portfolio.service.js";

class PortfolioController {
  /* =========================================
      Create Portfolio
  ========================================= */

  async create(req, res, next) {
    try {
      const response = await portfolioService.create(req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Get All Portfolios
  ========================================= */

  async getAll(req, res, next) {
    try {
      const response = await portfolioService.getAll();

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Get Published Portfolios
  ========================================= */

  async getPublished(req, res, next) {
    try {
      const response = await portfolioService.getPublished();

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Get Featured Portfolios
  ========================================= */

  async getFeatured(req, res, next) {
    try {
      const response = await portfolioService.getFeatured();

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Get Portfolio By ID
  ========================================= */

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const response = await portfolioService.getById(id);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Get Portfolio By Slug
  ========================================= */

  async getBySlug(req, res, next) {
    try {
      const { slug } = req.params;

      const response = await portfolioService.getBySlug(slug);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Update Portfolio
  ========================================= */

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const response = await portfolioService.update(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Delete Portfolio
  ========================================= */

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const response = await portfolioService.delete(id);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Update Status
  ========================================= */

  async updateStatus(req, res, next) {
    try {
      const { id } = req.params;

      const response = await portfolioService.updateStatus(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Toggle Featured
  ========================================= */

  async toggleFeatured(req, res, next) {
    try {
      const { id } = req.params;

      const response = await portfolioService.toggleFeatured(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================
      Update Order
  ========================================= */

  async updateOrder(req, res, next) {
    try {
      const { id } = req.params;

      const response = await portfolioService.updateOrder(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }
}

export default new PortfolioController();
