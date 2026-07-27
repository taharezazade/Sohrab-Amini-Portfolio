/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../../src/repositories/portfolio.repository.js", () => ({
  default: {
    findAll: vi.fn(),
    findPublished: vi.fn(),
    findFeatured: vi.fn(),
    findById: vi.fn(),
    findBySlug: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    updateStatus: vi.fn(),
    toggleFeatured: vi.fn(),
    updateOrder: vi.fn(),
    count: vi.fn(),
    existsById: vi.fn(),
    existsBySlug: vi.fn(),
    addImage: vi.fn(),
    findImages: vi.fn(),
    updateImage: vi.fn(),
    deleteImage: vi.fn(),
    updateImageOrder: vi.fn(),
  },
}));

vi.mock("../../../src/validations/portfolio.validation.js", () => ({
  createPortfolioSchema: {
    parse: vi.fn((data) => data),
  },
  updatePortfolioSchema: {
    parse: vi.fn((data) => data),
  },
  portfolioParamsSchema: {
    parse: vi.fn((data) => data),
  },
  portfolioStatusSchema: {
    parse: vi.fn((data) => data),
  },
  portfolioFeaturedSchema: {
    parse: vi.fn((data) => data),
  },
  portfolioOrderSchema: {
    parse: vi.fn((data) => data),
  },
}));

import portfolioRepository from "../../../src/repositories/portfolio.repository.js";

import {
  createPortfolioSchema,
  updatePortfolioSchema,
  portfolioParamsSchema,
  portfolioStatusSchema,
  portfolioFeaturedSchema,
  portfolioOrderSchema,
} from "../../../src/validations/portfolio.validation.js";

import PortfolioService from "../../../src/services/portfolio.service.js";
import ApiError from "../../../src/utils/ApiError.js";
import ApiResponse from "../../../src/utils/ApiResponse.js";

describe("PortfolioService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /* ============================
      Get All
  ============================ */

  describe("getAll()", () => {
    it("should return all portfolios", async () => {
      const portfolios = [{ id: "1" }, { id: "2" }];

      portfolioRepository.findAll.mockResolvedValue(portfolios);

      const result = await PortfolioService.getAll();

      expect(portfolioRepository.findAll).toHaveBeenCalledTimes(1);

      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(portfolios);
    });
  });

  /* ============================
      Get Published
  ============================ */

  describe("getPublished()", () => {
    it("should return published portfolios", async () => {
      const portfolios = [{ id: "1" }];

      portfolioRepository.findPublished.mockResolvedValue(portfolios);

      const result = await PortfolioService.getPublished();

      expect(portfolioRepository.findPublished).toHaveBeenCalled();

      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(portfolios);
    });
  });

  /* ============================
      Get Featured
  ============================ */

  describe("getFeatured()", () => {
    it("should return featured portfolios", async () => {
      const portfolios = [
        {
          id: "1",
          featured: true,
        },
      ];

      portfolioRepository.findFeatured.mockResolvedValue(portfolios);

      const result = await PortfolioService.getFeatured();

      expect(portfolioRepository.findFeatured).toHaveBeenCalled();

      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(portfolios);
    });
  });

  /* ============================
      Get By ID
  ============================ */

  describe("getById()", () => {
    it("should return portfolio by id", async () => {
      const portfolio = {
        id: "1",
      };

      portfolioRepository.findById.mockResolvedValue(portfolio);

      const result = await PortfolioService.getById("1");

      expect(portfolioParamsSchema.parse).toHaveBeenCalledWith({
        id: "1",
      });

      expect(portfolioRepository.findById).toHaveBeenCalledWith("1");

      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(portfolio);
    });

    it("should throw if portfolio does not exist", async () => {
      portfolioRepository.findById.mockResolvedValue(null);

      await expect(PortfolioService.getById("1")).rejects.toBeInstanceOf(
        ApiError,
      );
    });
  });

  /* ============================
      Get By Slug
  ============================ */

  describe("getBySlug()", () => {
    it("should return portfolio by slug", async () => {
      const portfolio = {
        slug: "task-flow",
      };

      portfolioRepository.findBySlug.mockResolvedValue(portfolio);

      const result = await PortfolioService.getBySlug("task-flow");

      expect(portfolioRepository.findBySlug).toHaveBeenCalledWith("task-flow");

      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(portfolio);
    });

    it("should throw if portfolio not found", async () => {
      portfolioRepository.findBySlug.mockResolvedValue(null);

      await expect(
        PortfolioService.getBySlug("task-flow"),
      ).rejects.toBeInstanceOf(ApiError);
    });
  });

  /* ============================
      Create
  ============================ */

  describe("create()", () => {
    it("should create portfolio", async () => {
      const payload = {
        title: "Task Flow",
        slug: "task-flow",
        description: "Description",
        thumbnail: "thumb.webp",
        projectUrl: "https://project.com",
        githubUrl: "https://github.com/test",
        category: "Web",
        technologies: ["React"],
        featured: true,
        order: 1,
        status: "PUBLISHED",
      };

      createPortfolioSchema.parse.mockReturnValue(payload);

      portfolioRepository.existsBySlug.mockResolvedValue(false);

      portfolioRepository.create.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await PortfolioService.create(payload);

      expect(createPortfolioSchema.parse).toHaveBeenCalledWith(payload);

      expect(portfolioRepository.existsBySlug).toHaveBeenCalledWith(
        payload.slug,
      );

      expect(portfolioRepository.create).toHaveBeenCalledWith(payload);

      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.statusCode).toBe(201);
    });

    it("should throw if slug already exists", async () => {
      portfolioRepository.existsBySlug.mockResolvedValue(true);

      await expect(
        PortfolioService.create({
          slug: "task-flow",
        }),
      ).rejects.toBeInstanceOf(ApiError);
    });
  });

  /* ============================
      Update
  ============================ */

  describe("update()", () => {
    it("should update portfolio", async () => {
      const payload = {
        title: "Updated",
        slug: "updated-project",
        description: "Updated",
        thumbnail: "thumb.webp",
        projectUrl: "",
        githubUrl: "",
        category: "Web",
        technologies: [],
        featured: false,
        order: 0,
        status: "PUBLISHED",
      };

      updatePortfolioSchema.parse.mockReturnValue(payload);

      portfolioRepository.findById.mockResolvedValue({
        id: "1",
        slug: "old-project",
      });

      portfolioRepository.existsBySlug.mockResolvedValue(false);

      portfolioRepository.update.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await PortfolioService.update("1", payload);

      expect(portfolioParamsSchema.parse).toHaveBeenCalledWith({
        id: "1",
      });

      expect(updatePortfolioSchema.parse).toHaveBeenCalledWith(payload);

      expect(portfolioRepository.update).toHaveBeenCalledWith("1", payload);

      expect(result.statusCode).toBe(200);
    });

    it("should throw if portfolio does not exist", async () => {
      portfolioRepository.findById.mockResolvedValue(null);

      await expect(PortfolioService.update("1", {})).rejects.toBeInstanceOf(
        ApiError,
      );
    });

    it("should throw if new slug already exists", async () => {
      updatePortfolioSchema.parse.mockReturnValue({
        slug: "new-slug",
      });

      portfolioRepository.findById.mockResolvedValue({
        id: "1",
        slug: "old-slug",
      });

      portfolioRepository.existsBySlug.mockResolvedValue(true);

      await expect(
        PortfolioService.update("1", {
          slug: "new-slug",
        }),
      ).rejects.toBeInstanceOf(ApiError);
    });
  });
});

/* ============================
      Delete
  ============================ */

describe("delete()", () => {
  it("should delete portfolio", async () => {
    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.delete.mockResolvedValue({});

    const result = await PortfolioService.delete("1");

    expect(portfolioParamsSchema.parse).toHaveBeenCalledWith({
      id: "1",
    });

    expect(portfolioRepository.findById).toHaveBeenCalledWith("1");

    expect(portfolioRepository.delete).toHaveBeenCalledWith("1");

    expect(result).toBeInstanceOf(ApiResponse);
    expect(result.statusCode).toBe(200);
    expect(result.data).toBeNull();
  });

  it("should throw if portfolio not found", async () => {
    portfolioRepository.findById.mockResolvedValue(null);

    await expect(PortfolioService.delete("1")).rejects.toBeInstanceOf(ApiError);
  });
});

/* ============================
      Update Status
  ============================ */

describe("updateStatus()", () => {
  it("should update portfolio status", async () => {
    portfolioStatusSchema.parse.mockReturnValue({
      status: "ARCHIVED",
    });

    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.updateStatus.mockResolvedValue({
      id: "1",
      status: "ARCHIVED",
    });

    const result = await PortfolioService.updateStatus("1", {
      status: "ARCHIVED",
    });

    expect(portfolioParamsSchema.parse).toHaveBeenCalledWith({
      id: "1",
    });

    expect(portfolioStatusSchema.parse).toHaveBeenCalledWith({
      status: "ARCHIVED",
    });

    expect(portfolioRepository.updateStatus).toHaveBeenCalledWith(
      "1",
      "ARCHIVED",
    );

    expect(result.statusCode).toBe(200);
    expect(result.data.status).toBe("ARCHIVED");
  });

  it("should throw if portfolio not found", async () => {
    portfolioRepository.findById.mockResolvedValue(null);

    await expect(
      PortfolioService.updateStatus("1", {
        status: "ARCHIVED",
      }),
    ).rejects.toBeInstanceOf(ApiError);
  });
});

/* ============================
      Toggle Featured
  ============================ */

describe("toggleFeatured()", () => {
  it("should mark portfolio as featured", async () => {
    portfolioFeaturedSchema.parse.mockReturnValue({
      featured: true,
    });

    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.toggleFeatured.mockResolvedValue({
      id: "1",
      featured: true,
    });

    const result = await PortfolioService.toggleFeatured("1", {
      featured: true,
    });

    expect(portfolioRepository.toggleFeatured).toHaveBeenCalledWith("1", true);

    expect(result.statusCode).toBe(200);
    expect(result.data.featured).toBe(true);
  });

  it("should remove portfolio from featured", async () => {
    portfolioFeaturedSchema.parse.mockReturnValue({
      featured: false,
    });

    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.toggleFeatured.mockResolvedValue({
      id: "1",
      featured: false,
    });

    const result = await PortfolioService.toggleFeatured("1", {
      featured: false,
    });

    expect(result.statusCode).toBe(200);
    expect(result.data.featured).toBe(false);
  });

  it("should throw if portfolio not found", async () => {
    portfolioRepository.findById.mockResolvedValue(null);

    await expect(
      PortfolioService.toggleFeatured("1", {
        featured: true,
      }),
    ).rejects.toBeInstanceOf(ApiError);
  });
});

/* ============================
      Update Order
  ============================ */

describe("updateOrder()", () => {
  it("should update portfolio order", async () => {
    portfolioOrderSchema.parse.mockReturnValue({
      order: 5,
    });

    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.updateOrder.mockResolvedValue({
      id: "1",
      order: 5,
    });

    const result = await PortfolioService.updateOrder("1", {
      order: 5,
    });

    expect(portfolioRepository.updateOrder).toHaveBeenCalledWith("1", 5);

    expect(result.statusCode).toBe(200);
    expect(result.data.order).toBe(5);
  });

  it("should throw if portfolio not found", async () => {
    portfolioRepository.findById.mockResolvedValue(null);

    await expect(
      PortfolioService.updateOrder("1", {
        order: 1,
      }),
    ).rejects.toBeInstanceOf(ApiError);
  });
});

/* ============================
      Count
  ============================ */

describe("count()", () => {
  it("should return portfolio count", async () => {
    portfolioRepository.count.mockResolvedValue(10);

    const result = await PortfolioService.count();

    expect(portfolioRepository.count).toHaveBeenCalledTimes(1);

    expect(result).toBeInstanceOf(ApiResponse);
    expect(result.statusCode).toBe(200);
    expect(result.data.total).toBe(10);
  });
});

/* ============================
      Exists By ID
  ============================ */

describe("existsById()", () => {
  it("should return exists=true", async () => {
    portfolioRepository.existsById.mockResolvedValue(true);

    const result = await PortfolioService.existsById("1");

    expect(portfolioParamsSchema.parse).toHaveBeenCalledWith({
      id: "1",
    });

    expect(portfolioRepository.existsById).toHaveBeenCalledWith("1");

    expect(result.statusCode).toBe(200);
    expect(result.data.exists).toBe(true);
  });

  it("should return exists=false", async () => {
    portfolioRepository.existsById.mockResolvedValue(false);

    const result = await PortfolioService.existsById("1");

    expect(result.data.exists).toBe(false);
  });
});

/* ============================
      Exists By Slug
  ============================ */

describe("existsBySlug()", () => {
  it("should return exists=true", async () => {
    portfolioRepository.existsBySlug.mockResolvedValue(true);

    const result = await PortfolioService.existsBySlug("task-flow");

    expect(portfolioRepository.existsBySlug).toHaveBeenCalledWith("task-flow");

    expect(result.statusCode).toBe(200);
    expect(result.data.exists).toBe(true);
  });

  it("should return exists=false", async () => {
    portfolioRepository.existsBySlug.mockResolvedValue(false);

    const result = await PortfolioService.existsBySlug("task-flow");

    expect(result.data.exists).toBe(false);
  });
});

/* ============================
      Add Image
  ============================ */

describe("addImage()", () => {
  it("should add image to portfolio", async () => {
    const payload = {
      image: "image.webp",
      alt: "Image",
      order: 1,
    };

    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.addImage.mockResolvedValue({
      id: "img1",
      ...payload,
    });

    const result = await PortfolioService.addImage("1", payload);

    expect(portfolioParamsSchema.parse).toHaveBeenCalledWith({
      id: "1",
    });

    expect(portfolioRepository.addImage).toHaveBeenCalledWith("1", payload);

    expect(result).toBeInstanceOf(ApiResponse);
    expect(result.statusCode).toBe(201);
    expect(result.data.id).toBe("img1");
  });

  it("should throw if portfolio not found", async () => {
    portfolioRepository.findById.mockResolvedValue(null);

    await expect(
      PortfolioService.addImage("1", {
        image: "image.webp",
      }),
    ).rejects.toBeInstanceOf(ApiError);
  });
});

/* ============================
      Get Images
  ============================ */

describe("getImages()", () => {
  it("should return portfolio images", async () => {
    const images = [
      {
        id: "img1",
      },
      {
        id: "img2",
      },
    ];

    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.findImages.mockResolvedValue(images);

    const result = await PortfolioService.getImages("1");

    expect(portfolioRepository.findImages).toHaveBeenCalledWith("1");

    expect(result.statusCode).toBe(200);
    expect(result.data).toEqual(images);
  });

  it("should throw if portfolio not found", async () => {
    portfolioRepository.findById.mockResolvedValue(null);

    await expect(PortfolioService.getImages("1")).rejects.toBeInstanceOf(
      ApiError,
    );
  });
});

/* ============================
      Update Image
  ============================ */

describe("updateImage()", () => {
  it("should update portfolio image", async () => {
    const payload = {
      image: "new.webp",
      alt: "Updated",
      order: 2,
    };

    portfolioRepository.updateImage.mockResolvedValue({
      id: "img1",
      ...payload,
    });

    const result = await PortfolioService.updateImage("img1", payload);

    expect(portfolioRepository.updateImage).toHaveBeenCalledWith(
      "img1",
      payload,
    );

    expect(result.statusCode).toBe(200);
    expect(result.data.image).toBe("new.webp");
  });

  it("should throw if image not found", async () => {
    portfolioRepository.updateImage.mockResolvedValue(null);

    await expect(
      PortfolioService.updateImage("img1", {}),
    ).rejects.toBeInstanceOf(ApiError);
  });
});

/* ============================
      Delete Image
  ============================ */

describe("deleteImage()", () => {
  it("should delete portfolio image", async () => {
    portfolioRepository.deleteImage.mockResolvedValue({
      id: "img1",
    });

    const result = await PortfolioService.deleteImage("img1");

    expect(portfolioRepository.deleteImage).toHaveBeenCalledWith("img1");

    expect(result.statusCode).toBe(200);
    expect(result.data).toBeNull();
  });

  it("should throw if image not found", async () => {
    portfolioRepository.deleteImage.mockResolvedValue(null);

    await expect(PortfolioService.deleteImage("img1")).rejects.toBeInstanceOf(
      ApiError,
    );
  });
});

/* ============================
      Update Image Order
  ============================ */

describe("updateImageOrder()", () => {
  it("should update image order", async () => {
    portfolioRepository.updateImageOrder.mockResolvedValue({
      id: "img1",
      order: 10,
    });

    const result = await PortfolioService.updateImageOrder("img1", {
      order: 10,
    });

    expect(portfolioRepository.updateImageOrder).toHaveBeenCalledWith(
      "img1",
      10,
    );

    expect(result.statusCode).toBe(200);
    expect(result.data.order).toBe(10);
  });

  it("should throw if image not found", async () => {
    portfolioRepository.updateImageOrder.mockResolvedValue(null);

    await expect(
      PortfolioService.updateImageOrder("img1", {
        order: 1,
      }),
    ).rejects.toBeInstanceOf(ApiError);
  });
});

/* ============================
      Add Multiple Images
  ============================ */

describe("addMultipleImages()", () => {
  it("should add multiple images", async () => {
    const images = [
      {
        image: "1.webp",
        alt: "One",
        order: 1,
      },
      {
        image: "2.webp",
        alt: "Two",
        order: 2,
      },
    ];

    portfolioRepository.findById.mockResolvedValue({
      id: "1",
    });

    portfolioRepository.addImage
      .mockResolvedValueOnce({
        id: "img1",
        ...images[0],
      })
      .mockResolvedValueOnce({
        id: "img2",
        ...images[1],
      });

    const result = await PortfolioService.addMultipleImages("1", images);

    expect(portfolioRepository.addImage).toHaveBeenCalledTimes(2);

    expect(result.statusCode).toBe(201);
    expect(result.data).toHaveLength(2);
  });

  it("should throw if portfolio not found", async () => {
    portfolioRepository.findById.mockResolvedValue(null);

    await expect(
      PortfolioService.addMultipleImages("1", []),
    ).rejects.toBeInstanceOf(ApiError);
  });
});
