/** @format */

import portfolioImageService from "../services/portfolio-image.service.js";

class PortfolioImageController {
  /* ============================
      Create Portfolio Image
  ============================ */

  async create(req, res, next) {
    try {
      const { portfolioId } = req.params;

      const image = await portfolioImageService.create(portfolioId, req.body);

      return res.status(image.statusCode).json(image);
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Portfolio Images
  ============================ */

  async getAll(req, res, next) {
    try {
      const { portfolioId } = req.params;

      const images = await portfolioImageService.getAll(portfolioId);

      return res.status(images.statusCode).json(images);
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Single Image
  ============================ */

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const image = await portfolioImageService.getById(id);

      return res.status(image.statusCode).json(image);
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update Image
  ============================ */

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const image = await portfolioImageService.update(id, req.body);

      return res.status(image.statusCode).json(image);
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update Image Order
  ============================ */

  async updateOrder(req, res, next) {
    try {
      const { id } = req.params;

      const image = await portfolioImageService.updateOrder(id, req.body);

      return res.status(image.statusCode).json(image);
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete Image
  ============================ */

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      const result = await portfolioImageService.delete(id);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete Portfolio Images
  ============================ */

  async deleteByPortfolio(req, res, next) {
    try {
      const { portfolioId } = req.params;

      const result =
        await portfolioImageService.deleteByPortfolioId(portfolioId);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Count Images
  ============================ */

  async count(req, res, next) {
    try {
      const { portfolioId } = req.params;

      const result = await portfolioImageService.count(portfolioId);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new PortfolioImageController();
