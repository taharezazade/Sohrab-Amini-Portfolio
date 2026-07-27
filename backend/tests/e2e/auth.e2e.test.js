/** @format */

import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import app from "../../src/app.js";

import authController from "../../src/controllers/auth.controller.js";

describe("Authentication API (E2E)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  /* =======================================================
      Register
  ======================================================= */

  describe("POST /api/auth/register", () => {
    it("should register a new administrator", async () => {
      vi.spyOn(authController, "register").mockImplementation((req, res) => {
        return res.status(201).json({
          success: true,
          statusCode: 201,
          message: "Administrator registered successfully.",
          data: {
            id: "admin-id",
            username: "admin",
            email: "admin@example.com",
            role: "ADMIN",
          },
        });
      });

      const response = await request(app).post("/api/auth/register").send({
        username: "admin",
        email: "admin@example.com",
        password: "Password123!",
      });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.email).toBe("admin@example.com");
    });
  });

  /* =======================================================
      Login
  ======================================================= */

  describe("POST /api/auth/login", () => {
    it("should login successfully", async () => {
      vi.spyOn(authController, "login").mockImplementation((req, res) => {
        res.cookie("refreshToken", "refresh-token");

        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Login successful.",
          data: {
            accessToken: "access-token",
            admin: {
              id: "admin-id",
              username: "admin",
              email: "admin@example.com",
              role: "ADMIN",
            },
          },
        });
      });

      const response = await request(app).post("/api/auth/login").send({
        email: "admin@example.com",
        password: "Password123!",
      });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.accessToken).toBeDefined();
    });
  });

  /* =======================================================
      Logout
  ======================================================= */

  describe("POST /api/auth/logout", () => {
    it("should logout successfully", async () => {
      vi.spyOn(authController, "logout").mockImplementation((req, res) => {
        res.clearCookie("refreshToken");

        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Logout successful.",
        });
      });

      const response = await request(app).post("/api/auth/logout");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Logout successful.");
    });
  });

  /* =======================================================
      Current User
  ======================================================= */

  describe("GET /api/auth/me", () => {
    it("should return current administrator profile", async () => {
      vi.spyOn(authController, "me").mockImplementation((req, res) => {
        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Profile fetched successfully.",
          data: {
            id: "admin-id",
            username: "admin",
            email: "admin@example.com",
            role: "ADMIN",
          },
        });
      });

      const response = await request(app).get("/api/auth/me");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.role).toBe("ADMIN");
    });
  });

  /* =======================================================
      Refresh Token
  ======================================================= */

  describe("POST /api/auth/refresh-token", () => {
    it("should refresh access token", async () => {
      vi.spyOn(authController, "refreshToken").mockImplementation(
        (req, res) => {
          res.cookie("refreshToken", "new-refresh-token");

          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Token refreshed successfully.",
            data: {
              accessToken: "new-access-token",
            },
          });
        },
      );

      const response = await request(app)
        .post("/api/auth/refresh-token")
        .set("Cookie", ["refreshToken=old-refresh-token"]);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.accessToken).toBe("new-access-token");
    });
  });
});
