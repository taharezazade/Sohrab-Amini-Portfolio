/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../../src/services/about.service.js", () => ({
  default: {
    getAbout: vi.fn(),
    createAbout: vi.fn(),
    updateAbout: vi.fn(),
    deleteAbout: vi.fn(),
  },
}));

import aboutController from "../../../src/controllers/about.controller.js";
import aboutService from "../../../src/services/about.service.js";

describe("AboutController", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    vi.clearAllMocks();

    req = {
      params: {},
      query: {},
      body: {},
    };

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    next = vi.fn();
  });

  /* ============================
      Get About
  ============================ */

  describe("getAbout()", () => {
    it("should return about information", async () => {
      const about = {
        id: "1",
        title: "About",
      };

      aboutService.getAbout.mockResolvedValue(about);

      await aboutController.getAbout(req, res, next);

      expect(aboutService.getAbout).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "About information fetched successfully",
        data: about,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Database Error");

      aboutService.getAbout.mockRejectedValue(error);

      await aboutController.getAbout(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Create About
  ============================ */

  describe("createAbout()", () => {
    it("should create about information", async () => {
      req.body = {
        title: "About",
        description: "Description",
      };

      const about = {
        id: "1",
        ...req.body,
      };

      aboutService.createAbout.mockResolvedValue(about);

      await aboutController.createAbout(req, res, next);

      expect(aboutService.createAbout).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(201);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "About information created successfully",
        data: about,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Create Error");

      aboutService.createAbout.mockRejectedValue(error);

      await aboutController.createAbout(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Update About
  ============================ */

  describe("updateAbout()", () => {
    it("should update about information", async () => {
      req.body = {
        title: "Updated",
      };

      const about = {
        id: "1",
        ...req.body,
      };

      aboutService.updateAbout.mockResolvedValue(about);

      await aboutController.updateAbout(req, res, next);

      expect(aboutService.updateAbout).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "About information updated successfully",
        data: about,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Update Error");

      aboutService.updateAbout.mockRejectedValue(error);

      await aboutController.updateAbout(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Delete About
  ============================ */

  describe("deleteAbout()", () => {
    it("should delete about information", async () => {
      aboutService.deleteAbout.mockResolvedValue(null);

      await aboutController.deleteAbout(req, res, next);

      expect(aboutService.deleteAbout).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "About information deleted successfully",
        data: null,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Delete Error");

      aboutService.deleteAbout.mockRejectedValue(error);

      await aboutController.deleteAbout(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
