/** @format */

import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import app from "../../src/app.js";

import heroController from "../../src/controllers/hero.controller.js";

describe("Hero API (E2E)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  /* =======================================================
      Get Hero
  ======================================================= */

  describe("GET /api/hero", () => {
    it("should return hero information", async () => {
      vi.spyOn(heroController, "getHero").mockImplementation((req, res) => {
        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Hero section fetched successfully.",
          data: {
            id: "hero-id",
            title: "Professional WordPress Developer",
            subtitle: "Building Fast, Secure & Scalable Websites",
            description:
              "Custom WordPress development, plugin programming, performance optimization and backend engineering with PHP.",
            image: "/uploads/hero/hero.webp",
            resume: "/uploads/hero/resume.pdf",
            isActive: true,
          },
        });
      });

      const response = await request(app).get("/api/hero");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe("Professional WordPress Developer");
    });
  });

  /* =======================================================
      Create Hero
  ======================================================= */

  describe("POST /api/hero", () => {
    it("should create hero section", async () => {
      vi.spyOn(heroController, "createHero").mockImplementation((req, res) => {
        return res.status(201).json({
          success: true,
          statusCode: 201,
          message: "Hero section created successfully.",
          data: req.body,
        });
      });

      const payload = {
        title: "Professional WordPress Developer",
        subtitle: "Custom WordPress & PHP Developer",
        description:
          "Developing high-performance WordPress websites with custom themes, plugins and optimized backend architecture.",
        image: "/uploads/hero/hero.webp",
        resume: "/uploads/hero/resume.pdf",
        primaryButtonText: "View Portfolio",
        primaryButtonLink: "/portfolio",
        secondaryButtonText: "Contact Me",
        secondaryButtonLink: "/contact",
      };

      const response = await request(app).post("/api/hero").send(payload);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(payload.title);
    });
  });

  /* =======================================================
      Update Hero
  ======================================================= */

  describe("PUT /api/hero", () => {
    it("should update hero section", async () => {
      vi.spyOn(heroController, "updateHero").mockImplementation((req, res) => {
        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Hero section updated successfully.",
          data: req.body,
        });
      });

      const payload = {
        title: "Senior WordPress Developer",
        subtitle: "PHP Backend & WordPress Expert",
        description:
          "Professional development of custom WordPress themes, plugins and scalable backend solutions.",
      };

      const response = await request(app).put("/api/hero").send(payload);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe("Senior WordPress Developer");
    });
  });

  /* =======================================================
      Delete Hero
  ======================================================= */

  describe("DELETE /api/hero", () => {
    it("should delete hero section", async () => {
      vi.spyOn(heroController, "deleteHero").mockImplementation((req, res) => {
        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Hero section deleted successfully.",
        });
      });

      const response = await request(app).delete("/api/hero");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Hero section deleted successfully.");
    });
  });
});
