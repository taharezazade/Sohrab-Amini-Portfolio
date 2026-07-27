/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../../src/repositories/about.repository.js", () => ({
  default: {
    find: vi.fn(),
    findById: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    exists: vi.fn(),
  },
}));

vi.mock("../../../src/validations/about.validation.js", () => ({
  createAboutSchema: {
    parse: vi.fn((data) => data),
  },
  updateAboutSchema: {
    parse: vi.fn((data) => data),
  },
  aboutParamsSchema: {
    parse: vi.fn((data) => data),
  },
}));

import aboutRepository from "../../../src/repositories/about.repository.js";
import {
  createAboutSchema,
  updateAboutSchema,
  aboutParamsSchema,
} from "../../../src/validations/about.validation.js";

import AboutService from "../../../src/services/about.service.js";
import ApiError from "../../../src/utils/ApiError.js";
import ApiResponse from "../../../src/utils/ApiResponse.js";

describe("AboutService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /* ============================
      Get About
  ============================ */

  describe("getAbout()", () => {
    it("should return about section", async () => {
      const about = {
        id: "1",
        title: "About",
      };

      aboutRepository.find.mockResolvedValue(about);

      const result = await AboutService.getAbout();

      expect(aboutRepository.find).toHaveBeenCalledTimes(1);

      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(about);
    });

    it("should throw if about does not exist", async () => {
      aboutRepository.find.mockResolvedValue(null);

      await expect(AboutService.getAbout()).rejects.toBeInstanceOf(ApiError);
    });
  });

  /* ============================
      Get About By ID
  ============================ */

  describe("getAboutById()", () => {
    it("should return about by id", async () => {
      const about = {
        id: "1",
      };

      aboutRepository.findById.mockResolvedValue(about);

      const result = await AboutService.getAboutById("1");

      expect(aboutParamsSchema.parse).toHaveBeenCalledWith({
        id: "1",
      });

      expect(aboutRepository.findById).toHaveBeenCalledWith("1");

      expect(result.statusCode).toBe(200);
      expect(result.data).toEqual(about);
    });

    it("should throw if about not found", async () => {
      aboutRepository.findById.mockResolvedValue(null);

      await expect(AboutService.getAboutById("1")).rejects.toBeInstanceOf(
        ApiError,
      );
    });
  });

  /* ============================
      Create About
  ============================ */

  describe("createAbout()", () => {
    it("should create about section", async () => {
      const payload = {
        title: "About",
        description: "Description",
        birthYear: 2003,
        location: "Tehran",
        experience: 3,
        image: "about.webp",
      };

      createAboutSchema.parse.mockReturnValue(payload);

      aboutRepository.exists.mockResolvedValue(false);

      aboutRepository.create.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await AboutService.createAbout(payload);

      expect(createAboutSchema.parse).toHaveBeenCalledWith(payload);

      expect(aboutRepository.exists).toHaveBeenCalled();

      expect(aboutRepository.create).toHaveBeenCalledWith(payload);

      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.statusCode).toBe(201);
    });

    it("should throw if about already exists", async () => {
      aboutRepository.exists.mockResolvedValue(true);

      await expect(
        AboutService.createAbout({
          title: "About",
        }),
      ).rejects.toBeInstanceOf(ApiError);
    });
  });

  /* ============================
      Update About
  ============================ */

  describe("updateAbout()", () => {
    it("should update about section", async () => {
      const payload = {
        title: "Updated",
        description: "Updated Description",
        birthYear: 2003,
        location: "Tehran",
        experience: 5,
        image: "updated.webp",
      };

      aboutParamsSchema.parse.mockReturnValue({
        id: "1",
      });

      updateAboutSchema.parse.mockReturnValue(payload);

      aboutRepository.findById.mockResolvedValue({
        id: "1",
      });

      aboutRepository.update.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await AboutService.updateAbout("1", payload);

      expect(aboutParamsSchema.parse).toHaveBeenCalledWith({
        id: "1",
      });

      expect(updateAboutSchema.parse).toHaveBeenCalledWith(payload);

      expect(aboutRepository.findById).toHaveBeenCalledWith("1");

      expect(aboutRepository.update).toHaveBeenCalledWith("1", payload);

      expect(result).toBeInstanceOf(ApiResponse);
      expect(result.statusCode).toBe(200);
    });

    it("should throw if about not found", async () => {
      aboutRepository.findById.mockResolvedValue(null);

      await expect(
        AboutService.updateAbout("1", {
          title: "Updated",
        }),
      ).rejects.toBeInstanceOf(ApiError);
    });
  });
});
