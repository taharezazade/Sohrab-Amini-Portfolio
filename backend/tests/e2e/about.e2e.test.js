/** @format */

import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import app from "../../src/app.js";

import aboutController from "../../src/controllers/about.controller.js";

describe("About API (E2E)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("GET /api/about", () => {
    it("should return about information", async () => {
      vi.spyOn(aboutController, "getAbout").mockImplementation((req, res) => {
        return res.status(200).json({
          success: true,
          message: "About fetched successfully.",
          data: {
            id: "about-id",
            title: "About Me",
            description:
              "Professional WordPress Developer specialized in custom theme and plugin development.",
            birthYear: 2003,
            location: "Tehran, Iran",
            experience: 5,
            image: "/uploads/about/about.webp",
          },
        });
      });

      const response = await request(app).get("/api/about");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe("About Me");
    });
  });

  describe("POST /api/about", () => {
    it("should create about information", async () => {
      vi.spyOn(aboutController, "createAbout").mockImplementation(
        (req, res) => {
          return res.status(201).json({
            success: true,
            message: "About section created successfully.",
            data: req.body,
          });
        },
      );

      const payload = {
        title: "About Me",
        description:
          "Professional WordPress Developer with expertise in PHP, MySQL, security, performance optimization and custom development.",
        birthYear: 2003,
        location: "Tehran, Iran",
        experience: 5,
        image: "/uploads/about/about.webp",
      };

      const response = await request(app).post("/api/about").send(payload);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(payload.title);
    });
  });

  describe("PUT /api/about", () => {
    it("should update about information", async () => {
      vi.spyOn(aboutController, "updateAbout").mockImplementation(
        (req, res) => {
          return res.status(200).json({
            success: true,
            message: "About section updated successfully.",
            data: req.body,
          });
        },
      );

      const payload = {
        title: "About Sohrab Amini",
        description:
          "Senior WordPress Developer specialized in custom WordPress themes, plugins, PHP backend development, MySQL optimization and security.",
        experience: 6,
      };

      const response = await request(app).put("/api/about").send(payload);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.experience).toBe(6);
    });
  });

  describe("DELETE /api/about", () => {
    it("should delete about information", async () => {
      vi.spyOn(aboutController, "deleteAbout").mockImplementation(
        (req, res) => {
          return res.status(200).json({
            success: true,
            message: "About section deleted successfully.",
          });
        },
      );

      const response = await request(app).delete("/api/about");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("About section deleted successfully.");
    });
  });
});
