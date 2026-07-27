/** @format */

import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("../../../src/config/prisma.js", () => ({
  default: {
    service: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
  },
}));

import prisma from "../../../src/config/prisma.js";
import ServiceRepository from "../../../src/repositories/services.repository.js";

describe("ServiceRepository", () => {
  let repository;

  beforeEach(() => {
    repository = new ServiceRepository();
    vi.clearAllMocks();
  });

  /* ============================
      Create
  ============================ */

  describe("create()", () => {
    it("should create a service", async () => {
      const payload = {
        title: "Web Development",
        slug: "web-development",
      };

      prisma.service.create.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await repository.create(payload);

      expect(prisma.service.create).toHaveBeenCalledWith({
        data: payload,
      });

      expect(result.title).toBe(payload.title);
    });
  });

  /* ============================
      Find All
  ============================ */

  describe("findAll()", () => {
    it("should return all services ordered by order", async () => {
      const services = [
        { id: "1", order: 1 },
        { id: "2", order: 2 },
      ];

      prisma.service.findMany.mockResolvedValue(services);

      const result = await repository.findAll();

      expect(prisma.service.findMany).toHaveBeenCalledWith({
        orderBy: {
          order: "asc",
        },
      });

      expect(result).toEqual(services);
    });
  });

  /* ============================
      Find Active
  ============================ */

  describe("findActive()", () => {
    it("should return active services", async () => {
      const services = [
        {
          id: "1",
          isActive: true,
        },
      ];

      prisma.service.findMany.mockResolvedValue(services);

      const result = await repository.findActive();

      expect(prisma.service.findMany).toHaveBeenCalledWith({
        where: {
          isActive: true,
        },
        orderBy: {
          order: "asc",
        },
      });

      expect(result).toEqual(services);
    });
  });

  /* ============================
      Find By ID
  ============================ */

  describe("findById()", () => {
    it("should return service by id", async () => {
      const service = {
        id: "1",
      };

      prisma.service.findUnique.mockResolvedValue(service);

      const result = await repository.findById("1");

      expect(prisma.service.findUnique).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
      });

      expect(result).toEqual(service);
    });

    it("should return null for invalid id", async () => {
      prisma.service.findUnique.mockResolvedValue(null);

      const result = await repository.findById("invalid");

      expect(result).toBeNull();
    });
  });

  /* ============================
      Find By Slug
  ============================ */

  describe("findBySlug()", () => {
    it("should return service by slug", async () => {
      const service = {
        slug: "web-development",
      };

      prisma.service.findUnique.mockResolvedValue(service);

      const result = await repository.findBySlug("web-development");

      expect(prisma.service.findUnique).toHaveBeenCalledWith({
        where: {
          slug: "web-development",
        },
      });

      expect(result).toEqual(service);
    });

    it("should return null for invalid slug", async () => {
      prisma.service.findUnique.mockResolvedValue(null);

      const result = await repository.findBySlug("invalid");

      expect(result).toBeNull();
    });
  });

  /* ============================
      Update
  ============================ */

  describe("update()", () => {
    it("should update service", async () => {
      const payload = {
        title: "Updated Service",
      };

      prisma.service.update.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await repository.update("1", payload);

      expect(prisma.service.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: payload,
      });

      expect(result.title).toBe("Updated Service");
    });
  });

  /* ============================
      Delete
  ============================ */

  describe("delete()", () => {
    it("should delete service", async () => {
      prisma.service.delete.mockResolvedValue({
        id: "1",
      });

      const result = await repository.delete("1");

      expect(prisma.service.delete).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
      });

      expect(result.id).toBe("1");
    });
  });

  /* ============================
      Toggle Status
  ============================ */

  describe("toggleStatus()", () => {
    it("should activate service", async () => {
      prisma.service.update.mockResolvedValue({
        id: "1",
        isActive: true,
      });

      const result = await repository.toggleStatus("1", true);

      expect(prisma.service.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: {
          isActive: true,
        },
      });

      expect(result.isActive).toBe(true);
    });

    it("should deactivate service", async () => {
      prisma.service.update.mockResolvedValue({
        id: "1",
        isActive: false,
      });

      const result = await repository.toggleStatus("1", false);

      expect(result.isActive).toBe(false);
    });
  });

  /* ============================
      Update Order
  ============================ */

  describe("updateOrder()", () => {
    it("should update service order", async () => {
      prisma.service.update.mockResolvedValue({
        id: "1",
        order: 5,
      });

      const result = await repository.updateOrder("1", 5);

      expect(prisma.service.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: {
          order: 5,
        },
      });

      expect(result.order).toBe(5);
    });
  });

  /* ============================
      Count
  ============================ */

  describe("count()", () => {
    it("should return services count", async () => {
      prisma.service.count.mockResolvedValue(8);

      const result = await repository.count();

      expect(prisma.service.count).toHaveBeenCalledTimes(1);
      expect(result).toBe(8);
    });
  });

  /* ============================
      Exists By Slug
  ============================ */

  describe("existsBySlug()", () => {
    it("should return true if slug exists", async () => {
      prisma.service.findUnique.mockResolvedValue({
        id: "1",
      });

      const result = await repository.existsBySlug("web-development");

      expect(prisma.service.findUnique).toHaveBeenCalledWith({
        where: {
          slug: "web-development",
        },
        select: {
          id: true,
        },
      });

      expect(result).toBe(true);
    });

    it("should return false if slug does not exist", async () => {
      prisma.service.findUnique.mockResolvedValue(null);

      const result = await repository.existsBySlug("invalid");

      expect(result).toBe(false);
    });
  });

  /* ============================
      Exists By ID
  ============================ */

  describe("existsById()", () => {
    it("should return true if id exists", async () => {
      prisma.service.findUnique.mockResolvedValue({
        id: "1",
      });

      const result = await repository.existsById("1");

      expect(prisma.service.findUnique).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        select: {
          id: true,
        },
      });

      expect(result).toBe(true);
    });

    it("should return false if id does not exist", async () => {
      prisma.service.findUnique.mockResolvedValue(null);

      const result = await repository.existsById("invalid");

      expect(result).toBe(false);
    });
  });
});
