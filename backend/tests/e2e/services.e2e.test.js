/** @format */

import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

import app from "../../src/app.js";

import servicesController from "../../src/controllers/services.controller.js";

/* ==========================================================
   Mock Services Controller
========================================================== */

vi.mock("../../src/controllers/services.controller.js", () => ({
  default: {
    getAllServices: vi.fn((req, res) =>
      res.status(200).json({
        success: true,
        message: "Services fetched successfully.",
        data: [
          {
            id: "service-1",
            title: "Custom WordPress Development",
          },
        ],
      }),
    ),

    getActiveServices: vi.fn((req, res) =>
      res.status(200).json({
        success: true,
        data: [
          {
            id: "service-1",
            isActive: true,
          },
        ],
      }),
    ),

    getServiceById: vi.fn((req, res) =>
      res.status(200).json({
        success: true,
        data: {
          id: req.params.id,
        },
      }),
    ),

    createService: vi.fn((req, res) =>
      res.status(201).json({
        success: true,
        message: "Service created successfully.",
        data: req.body,
      }),
    ),

    updateService: vi.fn((req, res) =>
      res.status(200).json({
        success: true,
        message: "Service updated successfully.",
        data: {
          id: req.params.id,
          ...req.body,
        },
      }),
    ),

    deleteService: vi.fn((req, res) =>
      res.status(200).json({
        success: true,
        message: "Service deleted successfully.",
      }),
    ),

    toggleServiceStatus: vi.fn((req, res) =>
      res.status(200).json({
        success: true,
        message: "Service status updated.",
      }),
    ),

    reorderServices: vi.fn((req, res) =>
      res.status(200).json({
        success: true,
        message: "Services reordered successfully.",
        data: req.body,
      }),
    ),
  },
}));

/* ==========================================================
   Services E2E Tests
========================================================== */

describe("Services Routes (E2E)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /* =======================================================
      GET /api/services
  ======================================================= */

  it("should return all services", async () => {
    const res = await request(app).get("/api/services");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);

    expect(servicesController.getAllServices).toHaveBeenCalledOnce();
  });

  /* =======================================================
      GET /api/services/active
  ======================================================= */

  it("should return active services", async () => {
    const res = await request(app).get("/api/services/active");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    expect(servicesController.getActiveServices).toHaveBeenCalledOnce();
  });

  /* =======================================================
      GET /api/services/:id
  ======================================================= */

  it("should return single service", async () => {
    const res = await request(app).get("/api/services/service-1");

    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe("service-1");

    expect(servicesController.getServiceById).toHaveBeenCalledOnce();
  });

  /* =======================================================
      POST /api/services
  ======================================================= */

  it("should create a service", async () => {
    const payload = {
      title: "Custom WordPress Development",
      slug: "custom-wordpress-development",
      description: "Professional WordPress development services.",
      category: "WordPress",
      technologies: ["PHP", "WordPress", "MySQL"],
      features: ["Custom Theme Development", "Performance Optimization"],
      order: 1,
    };

    const res = await request(app).post("/api/services").send(payload);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);

    expect(servicesController.createService).toHaveBeenCalledOnce();
  });

  /* =======================================================
      PUT /api/services/:id
  ======================================================= */

  it("should update a service", async () => {
    const payload = {
      title: "Updated Service",
    };

    const res = await request(app).put("/api/services/service-1").send(payload);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    expect(servicesController.updateService).toHaveBeenCalledOnce();
  });

  /* =======================================================
      PATCH /api/services/:id/toggle
  ======================================================= */

  it("should toggle service status", async () => {
    const res = await request(app)
      .patch("/api/services/service-1/toggle")
      .send({
        isActive: false,
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    expect(servicesController.toggleServiceStatus).toHaveBeenCalledOnce();
  });

  /* =======================================================
      PATCH /api/services/reorder
  ======================================================= */

  it("should reorder services", async () => {
    const payload = [
      {
        id: "service-1",
        order: 1,
      },
      {
        id: "service-2",
        order: 2,
      },
    ];

    const res = await request(app).patch("/api/services/reorder").send(payload);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    expect(servicesController.reorderServices).toHaveBeenCalledOnce();
  });

  /* =======================================================
      DELETE /api/services/:id
  ======================================================= */

  it("should delete a service", async () => {
    const res = await request(app).delete("/api/services/service-1");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    expect(servicesController.deleteService).toHaveBeenCalledOnce();
  });
});
