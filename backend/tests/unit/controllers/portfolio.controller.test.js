/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../../src/services/portfolio.service.js", () => ({
  default: {
    createPortfolio: vi.fn(),
    getAllPortfolios: vi.fn(),
    getPortfolioById: vi.fn(),
    getPortfolioBySlug: vi.fn(),
    updatePortfolio: vi.fn(),
    deletePortfolio: vi.fn(),
  },
}));

import portfolioController from "../../../src/controllers/portfolio.controller.js";
import portfolioService from "../../../src/services/portfolio.service.js";

describe("PortfolioController", () => {
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
      Create Portfolio
  ============================ */

  describe("createPortfolio()", () => {
    it("should create portfolio", async () => {
      req.body = {
        title: "Task Flow",
        slug: "task-flow",
      };

      const portfolio = {
        id: "1",
        ...req.body,
      };

      portfolioService.createPortfolio.mockResolvedValue(portfolio);

      await portfolioController.createPortfolio(req, res, next);

      expect(portfolioService.createPortfolio).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(201);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Portfolio created successfully",
        data: portfolio,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Create Error");

      portfolioService.createPortfolio.mockRejectedValue(error);

      await portfolioController.createPortfolio(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Get All Portfolios
  ============================ */

  describe("getAllPortfolios()", () => {
    it("should return all portfolios", async () => {
      const portfolios = [{ id: "1" }, { id: "2" }];

      portfolioService.getAllPortfolios.mockResolvedValue(portfolios);

      await portfolioController.getAllPortfolios(req, res, next);

      expect(portfolioService.getAllPortfolios).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Portfolios fetched successfully",
        data: portfolios,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Fetch Error");

      portfolioService.getAllPortfolios.mockRejectedValue(error);

      await portfolioController.getAllPortfolios(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Get Portfolio By ID
  ============================ */

  describe("getPortfolioById()", () => {
    it("should return portfolio by id", async () => {
      req.params.id = "1";

      const portfolio = {
        id: "1",
      };

      portfolioService.getPortfolioById.mockResolvedValue(portfolio);

      await portfolioController.getPortfolioById(req, res, next);

      expect(portfolioService.getPortfolioById).toHaveBeenCalledWith("1");

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Portfolio fetched successfully",
        data: portfolio,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.id = "1";

      const error = new Error("Not Found");

      portfolioService.getPortfolioById.mockRejectedValue(error);

      await portfolioController.getPortfolioById(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Get Portfolio By Slug
  ============================ */

  describe("getPortfolioBySlug()", () => {
    it("should return portfolio by slug", async () => {
      req.params.slug = "task-flow";

      const portfolio = {
        slug: "task-flow",
      };

      portfolioService.getPortfolioBySlug.mockResolvedValue(portfolio);

      await portfolioController.getPortfolioBySlug(req, res, next);

      expect(portfolioService.getPortfolioBySlug).toHaveBeenCalledWith(
        "task-flow",
      );

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Portfolio fetched successfully",
        data: portfolio,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.slug = "task-flow";

      const error = new Error("Not Found");

      portfolioService.getPortfolioBySlug.mockRejectedValue(error);

      await portfolioController.getPortfolioBySlug(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Update Portfolio
  ============================ */

  describe("updatePortfolio()", () => {
    it("should update portfolio", async () => {
      req.params.id = "1";

      req.body = {
        title: "Updated Project",
      };

      const portfolio = {
        id: "1",
        ...req.body,
      };

      portfolioService.updatePortfolio.mockResolvedValue(portfolio);

      await portfolioController.updatePortfolio(req, res, next);

      expect(portfolioService.updatePortfolio).toHaveBeenCalledWith(
        "1",
        req.body,
      );

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Portfolio updated successfully",
        data: portfolio,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.id = "1";

      const error = new Error("Update Error");

      portfolioService.updatePortfolio.mockRejectedValue(error);

      await portfolioController.updatePortfolio(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Delete Portfolio
  ============================ */

  describe("deletePortfolio()", () => {
    it("should delete portfolio", async () => {
      req.params.id = "1";

      portfolioService.deletePortfolio.mockResolvedValue(null);

      await portfolioController.deletePortfolio(req, res, next);

      expect(portfolioService.deletePortfolio).toHaveBeenCalledWith("1");

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Portfolio deleted successfully",
        data: null,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.id = "1";

      const error = new Error("Delete Error");

      portfolioService.deletePortfolio.mockRejectedValue(error);

      await portfolioController.deletePortfolio(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
