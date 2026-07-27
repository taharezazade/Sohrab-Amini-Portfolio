/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../../src/services/services.service.js", () => ({
  default: {
    createService: vi.fn(),
    getAllServices: vi.fn(),
    getActiveServices: vi.fn(),
    getServiceById: vi.fn(),
    updateService: vi.fn(),
    deleteService: vi.fn(),
    toggleServiceStatus: vi.fn(),
    reorderServices: vi.fn(),
  },
}));

import servicesController from "../../../src/controllers/services.controller.js";
import servicesService from "../../../src/services/services.service.js";

describe("ServicesController", () => {
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
      Create Service
  ============================ */

  describe("createService()", () => {
    it("should create service", async () => {
      req.body = {
        title: "Frontend",
        description: "React Development",
      };

      const service = {
        id: "1",
        ...req.body,
      };

      servicesService.createService.mockResolvedValue(service);

      await servicesController.createService(req, res, next);

      expect(servicesService.createService).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(201);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Service created successfully",
        data: service,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Create Error");

      servicesService.createService.mockRejectedValue(error);

      await servicesController.createService(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Get All Services
  ============================ */

  describe("getAllServices()", () => {
    it("should return all services", async () => {
      const services = [{ id: "1" }, { id: "2" }];

      servicesService.getAllServices.mockResolvedValue(services);

      await servicesController.getAllServices(req, res, next);

      expect(servicesService.getAllServices).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Services fetched successfully",
        data: services,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Fetch Error");

      servicesService.getAllServices.mockRejectedValue(error);

      await servicesController.getAllServices(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Get Active Services
  ============================ */

  describe("getActiveServices()", () => {
    it("should return active services", async () => {
      const services = [
        {
          id: "1",
          isActive: true,
        },
      ];

      servicesService.getActiveServices.mockResolvedValue(services);

      await servicesController.getActiveServices(req, res, next);

      expect(servicesService.getActiveServices).toHaveBeenCalledTimes(1);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Active services fetched successfully",
        data: services,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Fetch Error");

      servicesService.getActiveServices.mockRejectedValue(error);

      await servicesController.getActiveServices(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Get Service By ID
  ============================ */

  describe("getServiceById()", () => {
    it("should return service by id", async () => {
      req.params.id = "1";

      const service = {
        id: "1",
      };

      servicesService.getServiceById.mockResolvedValue(service);

      await servicesController.getServiceById(req, res, next);

      expect(servicesService.getServiceById).toHaveBeenCalledWith("1");

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Service fetched successfully",
        data: service,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.id = "1";

      const error = new Error("Not Found");

      servicesService.getServiceById.mockRejectedValue(error);

      await servicesController.getServiceById(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Update Service
  ============================ */

  describe("updateService()", () => {
    it("should update service", async () => {
      req.params.id = "1";

      req.body = {
        title: "Updated Service",
      };

      const service = {
        id: "1",
        ...req.body,
      };

      servicesService.updateService.mockResolvedValue(service);

      await servicesController.updateService(req, res, next);

      expect(servicesService.updateService).toHaveBeenCalledWith("1", req.body);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Service updated successfully",
        data: service,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.id = "1";

      const error = new Error("Update Error");

      servicesService.updateService.mockRejectedValue(error);

      await servicesController.updateService(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Delete Service
  ============================ */

  describe("deleteService()", () => {
    it("should delete service", async () => {
      req.params.id = "1";

      servicesService.deleteService.mockResolvedValue(null);

      await servicesController.deleteService(req, res, next);

      expect(servicesService.deleteService).toHaveBeenCalledWith("1");

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Service deleted successfully",
        data: null,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.id = "1";

      const error = new Error("Delete Error");

      servicesService.deleteService.mockRejectedValue(error);

      await servicesController.deleteService(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Toggle Service Status
  ============================ */

  describe("toggleServiceStatus()", () => {
    it("should toggle service status", async () => {
      req.params.id = "1";

      const service = {
        id: "1",
        isActive: false,
      };

      servicesService.toggleServiceStatus.mockResolvedValue(service);

      await servicesController.toggleServiceStatus(req, res, next);

      expect(servicesService.toggleServiceStatus).toHaveBeenCalledWith("1");

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Service status updated successfully",
        data: service,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      req.params.id = "1";

      const error = new Error("Status Error");

      servicesService.toggleServiceStatus.mockRejectedValue(error);

      await servicesController.toggleServiceStatus(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });

  /* ============================
      Reorder Services
  ============================ */

  describe("reorderServices()", () => {
    it("should reorder services", async () => {
      req.body = [
        {
          id: "1",
          order: 1,
        },
        {
          id: "2",
          order: 2,
        },
      ];

      servicesService.reorderServices.mockResolvedValue(req.body);

      await servicesController.reorderServices(req, res, next);

      expect(servicesService.reorderServices).toHaveBeenCalledWith(req.body);

      expect(res.status).toHaveBeenCalledWith(200);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "Services reordered successfully",
        data: req.body,
      });

      expect(next).not.toHaveBeenCalled();
    });

    it("should call next on error", async () => {
      const error = new Error("Reorder Error");

      servicesService.reorderServices.mockRejectedValue(error);

      await servicesController.reorderServices(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
