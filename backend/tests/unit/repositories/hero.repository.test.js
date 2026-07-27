/** @format */

import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("../../../src/config/prisma.js", () => ({
  default: {
    hero: {
      findFirst: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
  },
}));

import prisma from "../../../src/config/prisma.js";
import HeroRepository from "../../../src/repositories/hero.repository.js";

describe("HeroRepository", () => {
  let repository;

  beforeEach(() => {
    repository = new HeroRepository();
    vi.clearAllMocks();
  });

  /* ============================
      Find
  ============================ */

  describe("find()", () => {
    it("should return hero", async () => {
      const hero = {
        id: "hero-id",
        title: "Hero",
      };

      prisma.hero.findFirst.mockResolvedValue(hero);

      const result = await repository.find();

      expect(prisma.hero.findFirst).toHaveBeenCalledTimes(1);
      expect(result).toEqual(hero);
    });

    it("should return null if hero does not exist", async () => {
      prisma.hero.findFirst.mockResolvedValue(null);

      const result = await repository.find();

      expect(result).toBeNull();
    });
  });

  /* ============================
      Find By ID
  ============================ */

  describe("findById()", () => {
    it("should return hero by id", async () => {
      const hero = {
        id: "1",
        title: "Hero",
      };

      prisma.hero.findUnique.mockResolvedValue(hero);

      const result = await repository.findById("1");

      expect(prisma.hero.findUnique).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
      });

      expect(result).toEqual(hero);
    });

    it("should return null for invalid id", async () => {
      prisma.hero.findUnique.mockResolvedValue(null);

      const result = await repository.findById("invalid");

      expect(result).toBeNull();
    });
  });

  /* ============================
      Find Active
  ============================ */

  describe("findActive()", () => {
    it("should return active hero", async () => {
      const hero = {
        id: "1",
        isActive: true,
      };

      prisma.hero.findFirst.mockResolvedValue(hero);

      const result = await repository.findActive();

      expect(prisma.hero.findFirst).toHaveBeenCalledWith({
        where: {
          isActive: true,
        },
      });

      expect(result).toEqual(hero);
    });

    it("should return null if active hero does not exist", async () => {
      prisma.hero.findFirst.mockResolvedValue(null);

      const result = await repository.findActive();

      expect(result).toBeNull();
    });
  });

  /* ============================
      Create
  ============================ */

  describe("create()", () => {
    it("should create hero", async () => {
      const payload = {
        title: "Hero",
        subtitle: "Subtitle",
      };

      prisma.hero.create.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await repository.create(payload);

      expect(prisma.hero.create).toHaveBeenCalledWith({
        data: payload,
      });

      expect(result.title).toBe(payload.title);
    });
  });

  /* ============================
      Update
  ============================ */

  describe("update()", () => {
    it("should update hero", async () => {
      const payload = {
        title: "Updated Hero",
      };

      prisma.hero.update.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await repository.update("1", payload);

      expect(prisma.hero.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: payload,
      });

      expect(result.title).toBe("Updated Hero");
    });
  });

  /* ============================
      Upsert
  ============================ */

  describe("upsert()", () => {
    it("should update existing hero", async () => {
      prisma.hero.findFirst.mockResolvedValue({
        id: "hero-id",
      });

      prisma.hero.update.mockResolvedValue({
        id: "hero-id",
        title: "Updated",
      });

      const result = await repository.upsert({
        title: "Updated",
      });

      expect(prisma.hero.update).toHaveBeenCalled();
      expect(prisma.hero.create).not.toHaveBeenCalled();
      expect(result.title).toBe("Updated");
    });

    it("should create hero if none exists", async () => {
      prisma.hero.findFirst.mockResolvedValue(null);

      prisma.hero.create.mockResolvedValue({
        id: "new-id",
        title: "Hero",
      });

      const result = await repository.upsert({
        title: "Hero",
      });

      expect(prisma.hero.create).toHaveBeenCalled();
      expect(prisma.hero.update).not.toHaveBeenCalled();
      expect(result.title).toBe("Hero");
    });
  });

  /* ============================
      Toggle Status
  ============================ */

  describe("toggleStatus()", () => {
    it("should activate hero", async () => {
      prisma.hero.update.mockResolvedValue({
        id: "1",
        isActive: true,
      });

      const result = await repository.toggleStatus("1", true);

      expect(prisma.hero.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: {
          isActive: true,
        },
      });

      expect(result.isActive).toBe(true);
    });

    it("should deactivate hero", async () => {
      prisma.hero.update.mockResolvedValue({
        id: "1",
        isActive: false,
      });

      const result = await repository.toggleStatus("1", false);

      expect(result.isActive).toBe(false);
    });
  });

  /* ============================
      Delete
  ============================ */

  describe("delete()", () => {
    it("should delete hero", async () => {
      prisma.hero.delete.mockResolvedValue({
        id: "1",
      });

      const result = await repository.delete("1");

      expect(prisma.hero.delete).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
      });

      expect(result.id).toBe("1");
    });
  });

  /* ============================
      Exists
  ============================ */

  describe("exists()", () => {
    it("should return true if hero exists", async () => {
      prisma.hero.findFirst.mockResolvedValue({
        id: "1",
      });

      const result = await repository.exists();

      expect(prisma.hero.findFirst).toHaveBeenCalledWith({
        select: {
          id: true,
        },
      });

      expect(result).toBe(true);
    });

    it("should return false if hero does not exist", async () => {
      prisma.hero.findFirst.mockResolvedValue(null);

      const result = await repository.exists();

      expect(result).toBe(false);
    });
  });

  /* ============================
      Count
  ============================ */

  describe("count()", () => {
    it("should return hero count", async () => {
      prisma.hero.count.mockResolvedValue(3);

      const result = await repository.count();

      expect(prisma.hero.count).toHaveBeenCalledTimes(1);
      expect(result).toBe(3);
    });
  });
});
