/** @format */

import portfolioRepository from "../repositories/portfolio.repository.js";

import {
  createPortfolioSchema,
  updatePortfolioSchema,
  portfolioParamsSchema,
  portfolioSlugSchema,
  portfolioStatusSchema,
  portfolioFeaturedSchema,
  portfolioOrderSchema,
  portfolioImageSchema,
  portfolioImageOrderSchema,
  portfolioImagesSchema,
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
    portfolioParamsSchema.parse({
      id,
    });

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
    portfolioSlugSchema.parse({
      slug,
    });

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

      thumbnail: data.thumbnail ?? null,

      projectUrl: data.projectUrl ?? null,

      githubUrl: data.githubUrl ?? null,

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
    portfolioParamsSchema.parse({
      id,
    });

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
      ...(data.title !== undefined && {
        title: data.title,
      }),

      ...(data.slug !== undefined && {
        slug: data.slug,
      }),

      ...(data.description !== undefined && {
        description: data.description,
      }),

      ...(data.thumbnail !== undefined && {
        thumbnail: data.thumbnail,
      }),

      ...(data.projectUrl !== undefined && {
        projectUrl: data.projectUrl,
      }),

      ...(data.githubUrl !== undefined && {
        githubUrl: data.githubUrl,
      }),

      ...(data.category !== undefined && {
        category: data.category,
      }),

      ...(data.technologies !== undefined && {
        technologies: data.technologies,
      }),

      ...(data.featured !== undefined && {
        featured: data.featured,
      }),

      ...(data.order !== undefined && {
        order: data.order,
      }),

      ...(data.status !== undefined && {
        status: data.status,
      }),
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
    portfolioParamsSchema.parse({
      id,
    });

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
    portfolioParamsSchema.parse({
      id,
    });

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
    portfolioParamsSchema.parse({
      id,
    });

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
    portfolioParamsSchema.parse({
      id,
    });

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
      Check Exists By ID
  ========================================= */

  async existsById(id) {
    portfolioParamsSchema.parse({
      id,
    });

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
      Check Exists By Slug
  ========================================= */

  async existsBySlug(slug) {
    portfolioSlugSchema.parse({
      slug,
    });

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

    const data = portfolioImageSchema.parse(payload);

    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const image = await portfolioRepository.addImage(portfolioId, data);

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
    const data = portfolioImageSchema.partial().parse(payload);

    const image = await portfolioRepository.updateImage(imageId, data);

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
    const data = portfolioImageOrderSchema.parse(payload);

    const image = await portfolioRepository.updateImageOrder(
      imageId,
      data.order,
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
      Add Multiple Images
  ========================================= */

  async addMultipleImages(portfolioId, images) {
    portfolioParamsSchema.parse({
      id: portfolioId,
    });

    const validatedImages = portfolioImagesSchema.parse(images);

    const portfolio = await portfolioRepository.findById(portfolioId);

    if (!portfolio) {
      throw new ApiError(404, "Portfolio not found.");
    }

    const createdImages = [];

    for (const image of validatedImages) {
      const created = await portfolioRepository.addImage(portfolioId, image);

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
