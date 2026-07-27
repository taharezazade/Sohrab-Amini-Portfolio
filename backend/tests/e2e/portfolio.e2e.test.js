/** @format */

import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import app from "../../src/app.js";

import portfolioController from "../../src/controllers/portfolio.controller.js";

describe("Portfolio API (E2E)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  /* =======================================================
      Get All Portfolios
  ======================================================= */

  describe("GET /api/portfolio", () => {
    it("should return all portfolios", async () => {
      vi.spyOn(portfolioController, "getAllPortfolios").mockImplementation(
        (req, res) => {
          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Portfolios fetched successfully.",
            data: [
              {
                id: "portfolio-id",
                title: "Corporate WordPress Website",
                slug: "corporate-wordpress-website",
                category: "WordPress",
                featured: true,
                status: "PUBLISHED",
              },
            ],
          });
        },
      );

      const response = await request(app).get("/api/portfolio");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data[0].title).toBe("Corporate WordPress Website");
    });
  });

  /* =======================================================
      Get Portfolio By Slug
  ======================================================= */

  describe("GET /api/portfolio/slug/:slug", () => {
    it("should return portfolio by slug", async () => {
      vi.spyOn(portfolioController, "getPortfolioBySlug").mockImplementation(
        (req, res) => {
          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Portfolio fetched successfully.",
            data: {
              id: "portfolio-id",
              title: "Corporate WordPress Website",
              slug: req.params.slug,
            },
          });
        },
      );

      const response = await request(app).get(
        "/api/portfolio/slug/corporate-wordpress-website",
      );

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.slug).toBe("corporate-wordpress-website");
    });
  });

  /* =======================================================
      Get Portfolio By ID
  ======================================================= */

  describe("GET /api/portfolio/:id", () => {
    it("should return portfolio by id", async () => {
      vi.spyOn(portfolioController, "getPortfolioById").mockImplementation(
        (req, res) => {
          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Portfolio fetched successfully.",
            data: {
              id: req.params.id,
              title: "Corporate WordPress Website",
            },
          });
        },
      );

      const response = await request(app).get("/api/portfolio/portfolio-id");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe("portfolio-id");
    });
  });

  /* =======================================================
      Create Portfolio
  ======================================================= */

  describe("POST /api/portfolio", () => {
    it("should create portfolio", async () => {
      vi.spyOn(portfolioController, "createPortfolio").mockImplementation(
        (req, res) => {
          return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "Portfolio created successfully.",
            data: req.body,
          });
        },
      );

      const payload = {
        title: "Corporate WordPress Website",
        slug: "corporate-wordpress-website",
        description:
          "Professional custom WordPress website developed using PHP, MySQL, JavaScript and REST API.",
        thumbnail: "/uploads/portfolio/thumbnail.webp",
        projectUrl: "https://example.com",
        githubUrl: "",
        category: "WordPress",
        technologies: [
          "PHP",
          "MySQL",
          "WordPress",
          "HTML5",
          "CSS3",
          "JavaScript",
          "jQuery",
          "REST API",
          "Git",
          "Apache",
          "Nginx",
        ],
        featured: true,
        order: 1,
        status: "PUBLISHED",
      };

      const response = await request(app).post("/api/portfolio").send(payload);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(payload.title);
    });
  });

  /* =======================================================
      Update Portfolio
  ======================================================= */

  describe("PUT /api/portfolio/:id", () => {
    it("should update portfolio", async () => {
      vi.spyOn(portfolioController, "updatePortfolio").mockImplementation(
        (req, res) => {
          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Portfolio updated successfully.",
            data: req.body,
          });
        },
      );

      const payload = {
        title: "Advanced WordPress Platform",
        featured: false,
      };

      const response = await request(app)
        .put("/api/portfolio/portfolio-id")
        .send(payload);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe("Advanced WordPress Platform");
    });
  });

  /* =======================================================
      Delete Portfolio
  ======================================================= */

  describe("DELETE /api/portfolio/:id", () => {
    it("should delete portfolio", async () => {
      vi.spyOn(portfolioController, "deletePortfolio").mockImplementation(
        (req, res) => {
          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Portfolio deleted successfully.",
          });
        },
      );

      const response = await request(app).delete("/api/portfolio/portfolio-id");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Portfolio deleted successfully.");
    });
  });
});
