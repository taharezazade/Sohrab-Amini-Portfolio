/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../../src/services/hero.service.js", () => ({
  default: {
    getHero: vi.fn(),
    createHero: vi.fn(),
    updateHero: vi.fn(),
    deleteHero: vi.fn(),
  },
}));

import heroController from "../../../src/controllers/hero.controller.js";
import heroService from "../../../src/services/hero.service.js";

describe("HeroController", () => {
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
      Get Hero
  ============================ */

  describe("getHero()", () => {
    it("should return hero information", async () => {
      const hero = {
        id: "1",
        title: "Hero",
      };

      heroService.getHero.mockResolvedValue(hero);

      await heroController.getHero(req, res, next);

      expect(heroService.getHero).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Hero information fetched successfully",
        data: hero,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Database Error");

      heroService.getHero.mockRejectedValue(error);

      await heroController.getHero(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Create Hero
  ============================ */

  describe("createHero()", () => {
    it("should create hero information", async () => {
      req.body = {
        title: "Hero",
        description: "Description",
      };

      const hero = {
        id: "1",
        ...req.body,
      };

      heroService.createHero.mockResolvedValue(hero);

      await heroController.createHero(req, res, next);

      expect(heroService.createHero).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(201);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Hero information created successfully",
        data: hero,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Create Error");

      heroService.createHero.mockRejectedValue(error);

      await heroController.createHero(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Update Hero
  ============================ */

  describe("updateHero()", () => {
    it("should update hero information", async () => {
      req.body = {
        title: "Updated Hero",
      };

      const hero = {
        id: "1",
        ...req.body,
      };

      heroService.updateHero.mockResolvedValue(hero);

      await heroController.updateHero(req, res, next);

      expect(heroService.updateHero).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Hero information updated successfully",
        data: hero,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Update Error");

      heroService.updateHero.mockRejectedValue(error);

      await heroController.updateHero(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Delete Hero
  ============================ */

  describe("deleteHero()", () => {
    it("should delete hero information", async () => {
      heroService.deleteHero.mockResolvedValue(null);

      await heroController.deleteHero(req, res, next);

      expect(heroService.deleteHero).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Hero information deleted successfully",
        data: null,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Delete Error");

      heroService.deleteHero.mockRejectedValue(error);

      await heroController.deleteHero(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
