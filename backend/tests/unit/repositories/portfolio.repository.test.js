/** @format */

import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("../../../src/config/prisma.js", () => ({
  default: {
    portfolio: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
    portfolioImage: {
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      findMany: vi.fn(),
    },
  },
}));

import prisma from "../../../src/config/prisma.js";
import PortfolioRepository from "../../../src/repositories/portfolio.repository.js";

describe("PortfolioRepository", () => {
  let repository;

  beforeEach(() => {
    repository = new PortfolioRepository();
    vi.clearAllMocks();
  });

  /* ============================
      Create
  ============================ */

  describe("create()", () => {
    it("should create portfolio", async () => {
      const payload = {
        title: "Task Flow",
      };

      prisma.portfolio.create.mockResolvedValue({
        id: "1",
        ...payload,
        images: [],
      });

      const result = await repository.create(payload);

      expect(prisma.portfolio.create).toHaveBeenCalledWith({
        data: payload,
        include: {
          images: {
            orderBy: {
              order: "asc",
            },
          },
        },
      });

      expect(result.title).toBe(payload.title);
    });
  });

  /* ============================
      Find All
  ============================ */

  describe("findAll()", () => {
    it("should return all portfolios", async () => {
      prisma.portfolio.findMany.mockResolvedValue([]);

      await repository.findAll();

      expect(prisma.portfolio.findMany).toHaveBeenCalledWith({
        include: {
          images: {
            orderBy: {
              order: "asc",
            },
          },
        },
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      });
    });
  });

  /* ============================
      Find Published
  ============================ */

  describe("findPublished()", () => {
    it("should return published portfolios", async () => {
      prisma.portfolio.findMany.mockResolvedValue([]);

      await repository.findPublished();

      expect(prisma.portfolio.findMany).toHaveBeenCalledWith({
        where: {
          status: "PUBLISHED",
        },
        include: {
          images: {
            orderBy: {
              order: "asc",
            },
          },
        },
        orderBy: [{ featured: "desc" }, { order: "asc" }],
      });
    });
  });

  /* ============================
      Find Featured
  ============================ */

  describe("findFeatured()", () => {
    it("should return featured portfolios", async () => {
      prisma.portfolio.findMany.mockResolvedValue([]);

      await repository.findFeatured();

      expect(prisma.portfolio.findMany).toHaveBeenCalledWith({
        where: {
          featured: true,
          status: "PUBLISHED",
        },
        include: {
          images: {
            orderBy: {
              order: "asc",
            },
          },
        },
        orderBy: {
          order: "asc",
        },
      });
    });
  });

  /* ============================
      Find By ID
  ============================ */

  describe("findById()", () => {
    it("should return portfolio by id", async () => {
      prisma.portfolio.findUnique.mockResolvedValue({
        id: "1",
      });

      const result = await repository.findById("1");

      expect(prisma.portfolio.findUnique).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        include: {
          images: {
            orderBy: {
              order: "asc",
            },
          },
        },
      });

      expect(result.id).toBe("1");
    });
  });

  /* ============================
      Find By Slug
  ============================ */

  describe("findBySlug()", () => {
    it("should return portfolio by slug", async () => {
      prisma.portfolio.findUnique.mockResolvedValue({
        slug: "task-flow",
      });

      const result = await repository.findBySlug("task-flow");

      expect(prisma.portfolio.findUnique).toHaveBeenCalledWith({
        where: {
          slug: "task-flow",
        },
        include: {
          images: {
            orderBy: {
              order: "asc",
            },
          },
        },
      });

      expect(result.slug).toBe("task-flow");
    });
  });

  /* ============================
      Update
  ============================ */

  describe("update()", () => {
    it("should update portfolio", async () => {
      prisma.portfolio.update.mockResolvedValue({
        id: "1",
        title: "Updated",
      });

      const result = await repository.update("1", {
        title: "Updated",
      });

      expect(prisma.portfolio.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: {
          title: "Updated",
        },
        include: {
          images: true,
        },
      });

      expect(result.title).toBe("Updated");
    });
  });

  /* ============================
      Delete
  ============================ */

  describe("delete()", () => {
    it("should delete portfolio", async () => {
      prisma.portfolio.delete.mockResolvedValue({
        id: "1",
      });

      const result = await repository.delete("1");

      expect(result.id).toBe("1");
    });
  });

  /* ============================
      Update Status
  ============================ */

  describe("updateStatus()", () => {
    it("should update status", async () => {
      prisma.portfolio.update.mockResolvedValue({
        status: "ARCHIVED",
      });

      const result = await repository.updateStatus("1", "ARCHIVED");

      expect(prisma.portfolio.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: {
          status: "ARCHIVED",
        },
      });

      expect(result.status).toBe("ARCHIVED");
    });
  });

  /* ============================
      Toggle Featured
  ============================ */

  describe("toggleFeatured()", () => {
    it("should toggle featured", async () => {
      prisma.portfolio.update.mockResolvedValue({
        featured: true,
      });

      const result = await repository.toggleFeatured("1", true);

      expect(prisma.portfolio.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: {
          featured: true,
        },
      });

      expect(result.featured).toBe(true);
    });
  });

  /* ============================
      Update Order
  ============================ */

  describe("updateOrder()", () => {
    it("should update order", async () => {
      prisma.portfolio.update.mockResolvedValue({
        order: 3,
      });

      const result = await repository.updateOrder("1", 3);

      expect(result.order).toBe(3);
    });
  });

  /* ============================
      Count
  ============================ */

  describe("count()", () => {
    it("should return portfolio count", async () => {
      prisma.portfolio.count.mockResolvedValue(7);

      const result = await repository.count();

      expect(result).toBe(7);
    });
  });

  /* ============================
      Exists By ID
  ============================ */

  describe("existsById()", () => {
    it("should return true if id exists", async () => {
      prisma.portfolio.findUnique.mockResolvedValue({
        id: "1",
      });

      expect(await repository.existsById("1")).toBe(true);
    });

    it("should return false if id does not exist", async () => {
      prisma.portfolio.findUnique.mockResolvedValue(null);

      expect(await repository.existsById("1")).toBe(false);
    });
  });

  /* ============================
      Exists By Slug
  ============================ */

  describe("existsBySlug()", () => {
    it("should return true if slug exists", async () => {
      prisma.portfolio.findUnique.mockResolvedValue({
        id: "1",
      });

      expect(await repository.existsBySlug("task-flow")).toBe(true);
    });

    it("should return false if slug does not exist", async () => {
      prisma.portfolio.findUnique.mockResolvedValue(null);

      expect(await repository.existsBySlug("task-flow")).toBe(false);
    });
  });

  /* ============================
      Images
  ============================ */

  describe("addImage()", () => {
    it("should add image", async () => {
      prisma.portfolioImage.create.mockResolvedValue({
        id: "img1",
      });

      const result = await repository.addImage("1", {
        image: "test.webp",
      });

      expect(prisma.portfolioImage.create).toHaveBeenCalledWith({
        data: {
          portfolioId: "1",
          image: "test.webp",
        },
      });

      expect(result.id).toBe("img1");
    });
  });

  describe("updateImage()", () => {
    it("should update image", async () => {
      prisma.portfolioImage.update.mockResolvedValue({
        id: "img1",
        alt: "Updated",
      });

      const result = await repository.updateImage("img1", {
        alt: "Updated",
      });

      expect(result.alt).toBe("Updated");
    });
  });

  describe("deleteImage()", () => {
    it("should delete image", async () => {
      prisma.portfolioImage.delete.mockResolvedValue({
        id: "img1",
      });

      const result = await repository.deleteImage("img1");

      expect(result.id).toBe("img1");
    });
  });

  describe("findImages()", () => {
    it("should return ordered images", async () => {
      prisma.portfolioImage.findMany.mockResolvedValue([]);

      await repository.findImages("1");

      expect(prisma.portfolioImage.findMany).toHaveBeenCalledWith({
        where: {
          portfolioId: "1",
        },
        orderBy: {
          order: "asc",
        },
      });
    });
  });

  describe("updateImageOrder()", () => {
    it("should update image order", async () => {
      prisma.portfolioImage.update.mockResolvedValue({
        order: 5,
      });

      const result = await repository.updateImageOrder("img1", 5);

      expect(prisma.portfolioImage.update).toHaveBeenCalledWith({
        where: {
          id: "img1",
        },
        data: {
          order: 5,
        },
      });

      expect(result.order).toBe(5);
    });
  });
});
