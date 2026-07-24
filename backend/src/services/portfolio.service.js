/** @format */

import portfolioRepository from "../repositories/portfolio.repository.js";

import {
  createPortfolioSchema,
  updatePortfolioSchema,
  portfolioParamsSchema,
  portfolioStatusSchema,
  portfolioFeaturedSchema,
  portfolioOrderSchema,
} from "../validations/portfolio.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class PortfolioService {
  /* =========================================
      Get All Portfolios
  ========================================= */

  async getAll() {
    const portfolios = await portfolioRepository.findAll();

    return new ApiResponse(
      200,
      portfolios,
      "Portfolio list fetched successfully.",
    );
  }

  /* =========================================
      Get Published Portfolios
  ========================================= */

  async getPublished() {
    const portfolios = await portfolioRepository.findPublished();

    return new ApiResponse(
      200,
      portfolios,
      "Published portfolio list fetched successfully.",
    );
  }

  /* =========================================
      Get Featured Portfolios
  ========================================= */

  async getFeatured() {
    const portfolios = await portfolioRepository.findFeatured();

    return new ApiResponse(
      200,
      portfolios,
      "Featured portfolio list fetched successfully.",
    );
  }

  /* =========================================
      Get Portfolio By ID
  ========================================= */

  async getById(id) {
    portfolioParamsSchema.parse({ id });

    const portfolio = await portfolioRepository.findById(id);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    return new ApiResponse(200, portfolio, "Portfolio fetched successfully.");
  }

  /* =========================================
      Get Portfolio By Slug
  ========================================= */

  async getBySlug(slug) {
    const portfolio = await portfolioRepository.findBySlug(slug);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    return new ApiResponse(200, portfolio, "Portfolio fetched successfully.");
  }

  /* =========================================
      Create Portfolio
  ========================================= */

  async create(payload) {
    const data = createPortfolioSchema.parse(payload);

    const exists = await portfolioRepository.existsBySlug(data.slug);

    if (exists) {
      throw new ApiError(409, "Portfolio slug already exists.");
    }

    const portfolio = await portfolioRepository.create({
      title: data.title,
      slug: data.slug,
      description: data.description,

      thumbnail: data.thumbnail,

      projectUrl: data.projectUrl,
      githubUrl: data.githubUrl,

      category: data.category,

      technologies: data.technologies,

      featured: data.featured ?? false,

      order: data.order ?? 0,

      status: data.status ?? "PUBLISHED",
    });

    return new ApiResponse(201, portfolio, "Portfolio created successfully.");
  }

  /* =========================================
      Update Portfolio
  ========================================= */

  async update(id, payload) {
    portfolioParamsSchema.parse({ id });

    const data = updatePortfolioSchema.parse(payload);

    const portfolio = await portfolioRepository.findById(id);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    if (data.slug && data.slug !== portfolio.slug) {
      const slugExists = await portfolioRepository.existsBySlug(data.slug);

      if (slugExists) {
        throw new ApiError(409, "Portfolio slug already exists.");
      }
    }

    const updatedPortfolio = await portfolioRepository.update(id, {
      title: data.title,
      slug: data.slug,
      description: data.description,

      thumbnail: data.thumbnail,

      projectUrl: data.projectUrl,
      githubUrl: data.githubUrl,

      category: data.category,

      technologies: data.technologies,

      featured: data.featured,

      order: data.order,

      status: data.status,
    });

    return new ApiResponse(
      200,
      updatedPortfolio,
      "Portfolio updated successfully.",
    );
  }
  /* =========================================
      Delete Portfolio
  ========================================= */

  async delete(id) {
    portfolioParamsSchema.parse({ id });

    const portfolio = await portfolioRepository.findById(id);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    await portfolioRepository.delete(id);

    return new ApiResponse(200, null, "Portfolio deleted successfully.");
  }

  /* =========================================
      Update Portfolio Status
  ========================================= */

  async updateStatus(id, payload) {
    portfolioParamsSchema.parse({ id });

    const data = portfolioStatusSchema.parse(payload);

    const portfolio = await portfolioRepository.findById(id);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const updatedPortfolio = await portfolioRepository.updateStatus(
      id,
      data.status,
    );

    return new ApiResponse(
      200,
      updatedPortfolio,
      "Portfolio status updated successfully.",
    );
  }

  /* =========================================
      Toggle Featured
  ========================================= */

  async toggleFeatured(id, payload) {
    portfolioParamsSchema.parse({ id });

    const data = portfolioFeaturedSchema.parse(payload);

    const portfolio = await portfolioRepository.findById(id);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const updatedPortfolio = await portfolioRepository.toggleFeatured(
      id,
      data.featured,
    );

    return new ApiResponse(
      200,
      updatedPortfolio,
      `Portfolio ${
        data.featured ? "marked as featured" : "removed from featured"
      } successfully.`,
    );
  }

  /* =========================================
      Update Portfolio Order
  ========================================= */

  async updateOrder(id, payload) {
    portfolioParamsSchema.parse({ id });

    const data = portfolioOrderSchema.parse(payload);

    const portfolio = await portfolioRepository.findById(id);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const updatedPortfolio = await portfolioRepository.updateOrder(
      id,
      data.order,
    );

    return new ApiResponse(
      200,
      updatedPortfolio,
      "Portfolio order updated successfully.",
    );
  }

  /* =========================================
      Count Portfolios
  ========================================= */

  async count() {
    const total = await portfolioRepository.count();

    return new ApiResponse(
      200,
      {
        total,
      },
      "Portfolio count fetched successfully.",
    );
  }

  /* =========================================
      Check Portfolio Exists
  ========================================= */

  async existsById(id) {
    portfolioParamsSchema.parse({ id });

    const exists = await portfolioRepository.existsById(id);

    return new ApiResponse(
      200,
      {
        exists,
      },
      "Portfolio existence checked successfully.",
    );
  }

  /* =========================================
      Check Slug Exists
  ========================================= */

  async existsBySlug(slug) {
    const exists = await portfolioRepository.existsBySlug(slug);

    return new ApiResponse(
      200,
      {
        exists,
      },
      "Portfolio slug checked successfully.",
    );
  }

  /* =========================================
      Add Portfolio Image
  ========================================= */

  async addImage(portfolioId, payload) {
    portfolioParamsSchema.parse({
      id: portfolioId,
    });

    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const image = await portfolioRepository.addImage(portfolioId, {
      image: payload.image,
      alt: payload.alt,
      order: payload.order ?? 0,
    });

    return new ApiResponse(201, image, "Portfolio image added successfully.");
  }

  /* =========================================
      Get Portfolio Images
  ========================================= */

  async getImages(portfolioId) {
    portfolioParamsSchema.parse({
      id: portfolioId,
    });

    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const images = await portfolioRepository.findImages(portfolioId);

    return new ApiResponse(
      200,
      images,
      "Portfolio images fetched successfully.",
    );
  }

  /* =========================================
      Update Portfolio Image
  ========================================= */

  async updateImage(imageId, payload) {
    const image = await portfolioRepository.updateImage(imageId, {
      image: payload.image,
      alt: payload.alt,
      order: payload.order,
    });

    if (!image) {
      throw new ApiError(404, "Portfolio image not found.");
    }

    return new ApiResponse(200, image, "Portfolio image updated successfully.");
  }

  /* =========================================
      Delete Portfolio Image
  ========================================= */

  async deleteImage(imageId) {
    const image = await portfolioRepository.deleteImage(imageId);

    if (!image) {
      throw new ApiError(404, "Portfolio image not found.");
    }

    return new ApiResponse(200, null, "Portfolio image deleted successfully.");
  }

  /* =========================================
      Update Image Order
  ========================================= */

  async updateImageOrder(imageId, payload) {
    const image = await portfolioRepository.updateImageOrder(
      imageId,
      payload.order,
    );

    if (!image) {
      throw new ApiError(404, "Portfolio image not found.");
    }

    return new ApiResponse(
      200,
      image,
      "Portfolio image order updated successfully.",
    );
  }

  /* =========================================
      Bulk Add Images
  ========================================= */

  async addMultipleImages(portfolioId, images) {
    portfolioParamsSchema.parse({
      id: portfolioId,
    });

    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const createdImages = [];

    for (const image of images) {
      const created = await portfolioRepository.addImage(portfolioId, {
        image: image.image,
        alt: image.alt,
        order: image.order ?? 0,
      });

      createdImages.push(created);
    }

    return new ApiResponse(
      201,
      createdImages,
      "Portfolio images added successfully.",
    );
  }
}

export default new PortfolioService();
