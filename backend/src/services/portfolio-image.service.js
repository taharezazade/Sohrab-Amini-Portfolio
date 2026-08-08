/** @format */

import portfolioImageRepository from "../repositories/portfolio-image.repository.js";

import portfolioRepository from "../repositories/portfolio.repository.js";

import {
  createPortfolioImageSchema,
  updatePortfolioImageSchema,
  portfolioImageOrderSchema,
} from "../validations/portfolio-image.validation.js";

import ApiError from "../utils/ApiError.js";

import ApiResponse from "../utils/ApiResponse.js";

class PortfolioImageService {
  /* ============================
      Add Image
  ============================ */

  async create(portfolioId, payload) {
    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError({
        statusCode: 404,

        message: "Portfolio not found.",
      });
    }

    const data = createPortfolioImageSchema.parse(payload);

    const image = await portfolioImageRepository.create(portfolioId, {
      image: data.image,

      alt: data.alt,

      order: data.order ?? 0,
    });

    return new ApiResponse(
      201,

      image,

      "Portfolio image created successfully.",
    );
  }

  /* ============================
      Get Portfolio Images
  ============================ */

  async getAll(portfolioId) {
    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError({
        statusCode: 404,

        message: "Portfolio not found.",
      });
    }

    const images = await portfolioImageRepository.findAll(portfolioId);

    return new ApiResponse(
      200,

      images,

      "Portfolio images fetched successfully.",
    );
  }

  /* ============================
      Get Single Image
  ============================ */

  async getById(id) {
    const image = await portfolioImageRepository.findById(id);

    if (!image) {
      throw new ApiError({
        statusCode: 404,

        message: "Portfolio image not found.",
      });
    }

    return new ApiResponse(
      200,

      image,

      "Portfolio image fetched successfully.",
    );
  }

  /* ============================
      Update Image
  ============================ */

  async update(id, payload) {
    const image = await portfolioImageRepository.findById(id);

    if (!image) {
      throw new ApiError({
        statusCode: 404,

        message: "Portfolio image not found.",
      });
    }

    const data = updatePortfolioImageSchema.parse(payload);

    const updatedImage = await portfolioImageRepository.update(
      id,

      data,
    );

    return new ApiResponse(
      200,

      updatedImage,

      "Portfolio image updated successfully.",
    );
  }

  /* ============================
      Update Order
  ============================ */

  async updateOrder(id, payload) {
    const image = await portfolioImageRepository.findById(id);

    if (!image) {
      throw new ApiError({
        statusCode: 404,

        message: "Portfolio image not found.",
      });
    }

    const data = portfolioImageOrderSchema.parse(payload);

    const updatedImage = await portfolioImageRepository.updateOrder(
      id,

      data.order,
    );

    return new ApiResponse(
      200,

      updatedImage,

      "Portfolio image order updated successfully.",
    );
  }

  /* ============================
      Delete Image
  ============================ */

  async delete(id) {
    const image = await portfolioImageRepository.findById(id);

    if (!image) {
      throw new ApiError({
        statusCode: 404,

        message: "Portfolio image not found.",
      });
    }

    await portfolioImageRepository.delete(id);

    return new ApiResponse(
      200,

      null,

      "Portfolio image deleted successfully.",
    );
  }

  /* ============================
      Delete Portfolio Images
  ============================ */

  async deleteByPortfolioId(portfolioId) {
    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const result =
      await portfolioImageRepository.deleteByPortfolioId(portfolioId);

    return new ApiResponse(
      200,

      result,

      "Portfolio images deleted successfully.",
    );
  }

  /* ============================
      Count Images
  ============================ */

  async count(portfolioId) {
    const total = await portfolioImageRepository.count(portfolioId);

    return new ApiResponse(
      200,

      {
        total,
      },

      "Portfolio image count fetched successfully.",
    );
  }
}

export default new PortfolioImageService();
