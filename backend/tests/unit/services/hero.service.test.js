/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../../src/repositories/hero.repository.js", () => ({
  default: {
    find: vi.fn(),
    findById: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    upsert: vi.fn(),
    delete: vi.fn(),
    exists: vi.fn(),
    count: vi.fn(),
  },
}));

vi.mock("../../../src/validations/hero.validation.js", () => ({
  createHeroSchema: {
    parse: vi.fn((data) => data),
  },
  updateHeroSchema: {
    parse: vi.fn((data) => data),
  },
  heroParamsSchema: {
    parse: vi.fn((data) => data),
  },
  toggleHeroStatusSchema: {
    parse: vi.fn((data) => data),
  },
}));

import heroRepository from "../../../src/repositories/hero.repository.js";

import {
  createHeroSchema,
  updateHeroSchema,
  heroParamsSchema,
  toggleHeroStatusSchema,
} from "../../../src/validations/hero.validation.js";

import HeroService from "../../../src/services/hero.service.js";
import ApiError from "../../../src/utils/ApiError.js";
import ApiResponse from "../../../src/utils/ApiResponse.js";

describe("HeroService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /* ============================
      Get Hero
  ============================ */

  describe("getHero()", () => {
    it("should return hero", async () => {
      const hero = {
        id: "1",
        title: "Hero",
      };

      heroRepository.find.mockResolvedValue(hero);

      const result = await HeroService.getHero();

      expect(heroRepository.find).toHaveBeenCalledTimes(1);
      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(hero);
    });

    it("should throw if hero does not exist", async () => {
      heroRepository.find.mockResolvedValue(null);

      await expect(HeroService.getHero()).rejects.toBeInstanceOf(ApiError);
    });
  });

  /* ============================
      Get Hero By ID
  ============================ */

  describe("getHeroById()", () => {
    it("should return hero by id", async () => {
      const hero = {
        id: "1",
      };

      heroRepository.findById.mockResolvedValue(hero);

      const result = await HeroService.getHeroById("1");

      expect(heroParamsSchema.parse).toHaveBeenCalledWith({
        id: "1",
      });

      expect(heroRepository.findById).toHaveBeenCalledWith("1");

      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(hero);
    });

    it("should throw if hero not found", async () => {
      heroRepository.findById.mockResolvedValue(null);

      await expect(HeroService.getHeroById("1")).rejects.toBeInstanceOf(
        ApiError,
      );
    });
  });

  /* ============================
      Create Hero
  ============================ */

  describe("createHero()", () => {
    it("should create hero", async () => {
      const payload = {
        title: "Hero",
        subtitle: "Subtitle",
        description: "Description",
        image: "hero.webp",
        resume: "resume.pdf",
      };

      createHeroSchema.parse.mockReturnValue(payload);

      heroRepository.exists.mockResolvedValue(false);

      heroRepository.create.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await HeroService.createHero(payload);

      expect(createHeroSchema.parse).toHaveBeenCalledWith(payload);

      expect(heroRepository.exists).toHaveBeenCalled();

      expect(heroRepository.create).toHaveBeenCalledWith(payload);

      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.statusCode).toBe(201);
    });

    it("should throw if hero already exists", async () => {
      heroRepository.exists.mockResolvedValue(true);

      await expect(
        HeroService.createHero({
          title: "Hero",
        }),
      ).rejects.toBeInstanceOf(ApiError);
    });
  });

  /* ============================
      Update Hero
  ============================ */

  describe("updateHero()", () => {
    it("should update hero", async () => {
      const payload = {
        title: "Updated",
        subtitle: "Subtitle",
        description: "Description",
        image: "hero.webp",
        resume: "resume.pdf",
        isActive: true,
      };

      updateHeroSchema.parse.mockReturnValue(payload);

      heroRepository.findById.mockResolvedValue({
        id: "1",
      });

      heroRepository.update.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await HeroService.updateHero("1", payload);

      expect(heroParamsSchema.parse).toHaveBeenCalledWith({
        id: "1",
      });

      expect(updateHeroSchema.parse).toHaveBeenCalledWith(payload);

      expect(heroRepository.update).toHaveBeenCalledWith("1", payload);

      expect(result.statusCode).toBe(200);
    });

    it("should throw if hero not found", async () => {
      heroRepository.findById.mockResolvedValue(null);

      await expect(HeroService.updateHero("1", {})).rejects.toBeInstanceOf(
        ApiError,
      );
    });
  });

  /* ============================
      Toggle Status
  ============================ */

  describe("toggleStatus()", () => {
    it("should activate hero", async () => {
      toggleHeroStatusSchema.parse.mockReturnValue({
        isActive: true,
      });

      heroRepository.findById.mockResolvedValue({
        id: "1",
      });

      heroRepository.update.mockResolvedValue({
        id: "1",
        isActive: true,
      });

      const result = await HeroService.toggleStatus("1", {
        isActive: true,
      });

      expect(result.statusCode).toBe(200);
      expect(result.data.isActive).toBe(true);
    });

    it("should deactivate hero", async () => {
      toggleHeroStatusSchema.parse.mockReturnValue({
        isActive: false,
      });

      heroRepository.findById.mockResolvedValue({
        id: "1",
      });

      heroRepository.update.mockResolvedValue({
        id: "1",
        isActive: false,
      });

      const result = await HeroService.toggleStatus("1", {
        isActive: false,
      });

      expect(result.data.isActive).toBe(false);
    });

    it("should throw if hero not found", async () => {
      heroRepository.findById.mockResolvedValue(null);

      await expect(
        HeroService.toggleStatus("1", {
          isActive: true,
        }),
      ).rejects.toBeInstanceOf(ApiError);
    });
  });

  /* ============================
      Activate Hero
  ============================ */

  describe("activateHero()", () => {
    it("should activate hero", async () => {
      heroRepository.findById.mockResolvedValue({
        id: "1",
      });

      heroRepository.update.mockResolvedValue({
        id: "1",
        isActive: true,
      });

      const result = await HeroService.activateHero("1");

      expect(heroRepository.update).toHaveBeenCalledWith("1", {
        isActive: true,
      });

      expect(result.statusCode).toBe(200);
    });
  });

  /* ============================
      Deactivate Hero
  ============================ */

  describe("deactivateHero()", () => {
    it("should deactivate hero", async () => {
      heroRepository.findById.mockResolvedValue({
        id: "1",
      });

      heroRepository.update.mockResolvedValue({
        id: "1",
        isActive: false,
      });

      const result = await HeroService.deactivateHero("1");

      expect(heroRepository.update).toHaveBeenCalledWith("1", {
        isActive: false,
      });

      expect(result.statusCode).toBe(200);
    });
  });

  /* ============================
      Upsert Hero
  ============================ */

  describe("upsertHero()", () => {
    it("should upsert hero", async () => {
      const payload = {
        title: "Hero",
        subtitle: "Subtitle",
        description: "Description",
        image: "hero.webp",
        resume: "resume.pdf",
        isActive: true,
      };

      updateHeroSchema.parse.mockReturnValue(payload);

      heroRepository.upsert.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await HeroService.upsertHero(payload);

      expect(heroRepository.upsert).toHaveBeenCalledWith(payload);

      expect(result.statusCode).toBe(200);
    });
  });

  /* ============================
      Delete Hero
  ============================ */

  describe("deleteHero()", () => {
    it("should delete hero", async () => {
      heroRepository.findById.mockResolvedValue({
        id: "1",
      });

      heroRepository.delete.mockResolvedValue({});

      const result = await HeroService.deleteHero("1");

      expect(heroRepository.delete).toHaveBeenCalledWith("1");

      expect(result.statusCode).toBe(200);
      expect(result.data).toBeNull();
    });

    it("should throw if hero not found", async () => {
      heroRepository.findById.mockResolvedValue(null);

      await expect(HeroService.deleteHero("1")).rejects.toBeInstanceOf(
        ApiError,
      );
    });
  });

  /* ============================
      Exists
  ============================ */

  describe("exists()", () => {
    it("should return exists=true", async () => {
      heroRepository.exists.mockResolvedValue(true);

      const result = await HeroService.exists();

      expect(result.statusCode).toBe(200);
      expect(result.data.exists).toBe(true);
    });

    it("should return exists=false", async () => {
      heroRepository.exists.mockResolvedValue(false);

      const result = await HeroService.exists();

      expect(result.data.exists).toBe(false);
    });
  });

  /* ============================
      Count
  ============================ */

  describe("count()", () => {
    it("should return hero count", async () => {
      heroRepository.count.mockResolvedValue(5);

      const result = await HeroService.count();

      expect(heroRepository.count).toHaveBeenCalled();

      expect(result.statusCode).toBe(200);
      expect(result.data.total).toBe(5);
    });
  });
});
