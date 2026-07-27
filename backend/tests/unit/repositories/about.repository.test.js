/** @format */

import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("../../../src/config/prisma.js", () => ({
  default: {
    about: {
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
import AboutRepository from "../../../src/repositories/about.repository.js";

describe("AboutRepository", () => {
  let repository;

  beforeEach(() => {
    repository = new AboutRepository();
    vi.clearAllMocks();
  });

  /* ============================
      Find
  ============================ */

  describe("find()", () => {
    it("should return about data", async () => {
      const about = {
        id: "about-id",
        title: "About",
      };

      prisma.about.findFirst.mockResolvedValue(about);

      const result = await repository.find();

      expect(prisma.about.findFirst).toHaveBeenCalledTimes(1);
      expect(result).toEqual(about);
    });

    it("should return null if about does not exist", async () => {
      prisma.about.findFirst.mockResolvedValue(null);

      const result = await repository.find();

      expect(result).toBeNull();
    });
  });

  /* ============================
      Find By ID
  ============================ */

  describe("findById()", () => {
    it("should return about by id", async () => {
      const about = {
        id: "123",
        title: "About",
      };

      prisma.about.findUnique.mockResolvedValue(about);

      const result = await repository.findById("123");

      expect(prisma.about.findUnique).toHaveBeenCalledWith({
        where: {
          id: "123",
        },
      });

      expect(result).toEqual(about);
    });

    it("should return null for invalid id", async () => {
      prisma.about.findUnique.mockResolvedValue(null);

      const result = await repository.findById("invalid");

      expect(result).toBeNull();
    });
  });

  /* ============================
      Create
  ============================ */

  describe("create()", () => {
    it("should create about", async () => {
      const payload = {
        title: "About",
        description: "Description",
      };

      prisma.about.create.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await repository.create(payload);

      expect(prisma.about.create).toHaveBeenCalledWith({
        data: payload,
      });

      expect(result.title).toBe(payload.title);
    });
  });

  /* ============================
      Update
  ============================ */

  describe("update()", () => {
    it("should update about", async () => {
      const payload = {
        title: "Updated",
      };

      prisma.about.update.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await repository.update("1", payload);

      expect(prisma.about.update).toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: payload,
      });

      expect(result.title).toBe("Updated");
    });
  });

  /* ============================
      Upsert
  ============================ */

  describe("upsert()", () => {
    it("should update existing about", async () => {
      prisma.about.findFirst.mockResolvedValue({
        id: "about-id",
      });

      prisma.about.update.mockResolvedValue({
        id: "about-id",
        title: "Updated",
      });

      const result = await repository.upsert({
        title: "Updated",
      });

      expect(prisma.about.update).toHaveBeenCalled();
      expect(prisma.about.create).not.toHaveBeenCalled();
      expect(result.title).toBe("Updated");
    });

    it("should create about if none exists", async () => {
      prisma.about.findFirst.mockResolvedValue(null);

      prisma.about.create.mockResolvedValue({
        id: "new-id",
        title: "About",
      });

      const result = await repository.upsert({
        title: "About",
      });

      expect(prisma.about.create).toHaveBeenCalled();
      expect(prisma.about.update).not.toHaveBeenCalled();
      expect(result.title).toBe("About");
    });
  });

  /* ============================
      Delete
  ============================ */

  describe("delete()", () => {
    it("should delete about", async () => {
      prisma.about.delete.mockResolvedValue({
        id: "1",
      });

      const result = await repository.delete("1");

      expect(prisma.about.delete).toHaveBeenCalledWith({
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
    it("should return true if about exists", async () => {
      prisma.about.findFirst.mockResolvedValue({
        id: "1",
      });

      const result = await repository.exists();

      expect(result).toBe(true);
    });

    it("should return false if about does not exist", async () => {
      prisma.about.findFirst.mockResolvedValue(null);

      const result = await repository.exists();

      expect(result).toBe(false);
    });
  });

  /* ============================
      Count
  ============================ */

  describe("count()", () => {
    it("should return about count", async () => {
      prisma.about.count.mockResolvedValue(5);

      const result = await repository.count();

      expect(prisma.about.count).toHaveBeenCalledTimes(1);
      expect(result).toBe(5);
    });
  });
});
