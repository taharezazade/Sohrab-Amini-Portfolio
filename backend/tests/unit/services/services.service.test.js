/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

const repositoryMock = {
  create: vi.fn(),
  findAll: vi.fn(),
  findActive: vi.fn(),
  findById: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
  updateOrder: vi.fn(),
};

vi.mock("../../../src/repositories/services.repository.js", () => ({
  default: vi.fn(() => repositoryMock),
}));

import ServicesService from "../../../src/services/services.service.js";
// import ServiceRepository from "../../../src/repositories/services.repository.js";

describe("ServicesService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /* ============================
      Create Service
  ============================ */

  describe("createService()", () => {
    it("should create service", async () => {
      const payload = {
        title: "Frontend Development",
        description: "React Development",
        icon: "code",
        features: ["React", "Vite"],
        order: 1,
        isActive: true,
      };

      repositoryMock.create.mockResolvedValue({
        id: "1",
        ...payload,
      });

      const result = await ServicesService.createService(payload);

      expect(repositoryMock.create).toHaveBeenCalledWith(payload);
      expect(result.id).toBe("1");
    });

    it("should use default values", async () => {
      repositoryMock.create.mockResolvedValue({
        id: "1",
      });

      await ServicesService.createService({
        title: "Frontend",
        description: "React",
      });

      expect(repositoryMock.create).toHaveBeenCalledWith({
        title: "Frontend",
        description: "React",
        icon: null,
        features: [],
        order: 0,
        isActive: true,
      });
    });

    it("should throw if title is missing", async () => {
      await expect(
        ServicesService.createService({
          description: "Test",
        }),
      ).rejects.toThrow("Title and description are required");
    });

    it("should throw if description is missing", async () => {
      await expect(
        ServicesService.createService({
          title: "Test",
        }),
      ).rejects.toThrow("Title and description are required");
    });
  });

  /* ============================
      Get All Services
  ============================ */

  describe("getAllServices()", () => {
    it("should return all services", async () => {
      const services = [{ id: "1" }, { id: "2" }];

      repositoryMock.findAll.mockResolvedValue(services);

      const result = await ServicesService.getAllServices();

      expect(repositoryMock.findAll).toHaveBeenCalledTimes(1);
      expect(result).toEqual(services);
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

      repositoryMock.findActive.mockResolvedValue(services);

      const result = await ServicesService.getActiveServices();

      expect(repositoryMock.findActive).toHaveBeenCalledTimes(1);
      expect(result).toEqual(services);
    });
  });

  /* ============================
      Get Service By ID
  ============================ */

  describe("getServiceById()", () => {
    it("should return service", async () => {
      const service = {
        id: "1",
      };

      repositoryMock.findById.mockResolvedValue(service);

      const result = await ServicesService.getServiceById("1");

      expect(repositoryMock.findById).toHaveBeenCalledWith("1");
      expect(result).toEqual(service);
    });

    it("should throw if id is missing", async () => {
      await expect(ServicesService.getServiceById()).rejects.toThrow(
        "Service id is required",
      );
    });

    it("should throw if service not found", async () => {
      repositoryMock.findById.mockResolvedValue(null);

      await expect(ServicesService.getServiceById("1")).rejects.toThrow(
        "Service not found",
      );
    });
  });

  /* ============================
      Update Service
  ============================ */

  describe("updateService()", () => {
    it("should update service", async () => {
      repositoryMock.findById.mockResolvedValue({
        id: "1",
      });

      repositoryMock.update.mockResolvedValue({
        id: "1",
        title: "Updated",
      });

      const result = await ServicesService.updateService("1", {
        title: "Updated",
      });

      expect(repositoryMock.update).toHaveBeenCalledWith("1", {
        title: "Updated",
      });

      expect(result.title).toBe("Updated");
    });

    it("should update multiple fields", async () => {
      repositoryMock.findById.mockResolvedValue({
        id: "1",
      });

      repositoryMock.update.mockResolvedValue({});

      await ServicesService.updateService("1", {
        title: "Frontend",
        description: "React",
        order: 2,
        isActive: false,
      });

      expect(repositoryMock.update).toHaveBeenCalledWith("1", {
        title: "Frontend",
        description: "React",
        order: 2,
        isActive: false,
      });
    });

    it("should throw if id is missing", async () => {
      await expect(ServicesService.updateService()).rejects.toThrow(
        "Service id is required",
      );
    });

    it("should throw if service not found", async () => {
      repositoryMock.findById.mockResolvedValue(null);

      await expect(ServicesService.updateService("1", {})).rejects.toThrow(
        "Service not found",
      );
    });
  });

  /* ============================
      Delete Service
  ============================ */

  describe("deleteService()", () => {
    it("should delete service", async () => {
      repositoryMock.findById.mockResolvedValue({
        id: "1",
      });

      repositoryMock.delete.mockResolvedValue({
        id: "1",
      });

      const result = await ServicesService.deleteService("1");

      expect(repositoryMock.delete).toHaveBeenCalledWith("1");
      expect(result.id).toBe("1");
    });

    it("should throw if id is missing", async () => {
      await expect(ServicesService.deleteService()).rejects.toThrow(
        "Service id is required",
      );
    });

    it("should throw if service not found", async () => {
      repositoryMock.findById.mockResolvedValue(null);

      await expect(ServicesService.deleteService("1")).rejects.toThrow(
        "Service not found",
      );
    });
  });

  /* ============================
      Toggle Service Status
  ============================ */

  describe("toggleServiceStatus()", () => {
    it("should activate service", async () => {
      repositoryMock.findById.mockResolvedValue({
        id: "1",
        isActive: false,
      });

      repositoryMock.update.mockResolvedValue({
        id: "1",
        isActive: true,
      });

      const result = await ServicesService.toggleServiceStatus("1");

      expect(repositoryMock.update).toHaveBeenCalledWith("1", {
        isActive: true,
      });

      expect(result.isActive).toBe(true);
    });

    it("should deactivate service", async () => {
      repositoryMock.findById.mockResolvedValue({
        id: "1",
        isActive: true,
      });

      repositoryMock.update.mockResolvedValue({
        id: "1",
        isActive: false,
      });

      const result = await ServicesService.toggleServiceStatus("1");

      expect(repositoryMock.update).toHaveBeenCalledWith("1", {
        isActive: false,
      });

      expect(result.isActive).toBe(false);
    });

    it("should throw if id is missing", async () => {
      await expect(ServicesService.toggleServiceStatus()).rejects.toThrow(
        "Service id is required",
      );
    });

    it("should throw if service not found", async () => {
      repositoryMock.findById.mockResolvedValue(null);

      await expect(ServicesService.toggleServiceStatus("1")).rejects.toThrow(
        "Service not found",
      );
    });
  });

  /* ============================
      Reorder Services
  ============================ */

  describe("reorderServices()", () => {
    it("should reorder services", async () => {
      const items = [
        {
          id: "1",
          order: 1,
        },
        {
          id: "2",
          order: 2,
        },
      ];

      repositoryMock.updateOrder.mockResolvedValue(items);

      const result = await ServicesService.reorderServices(items);

      expect(repositoryMock.updateOrder).toHaveBeenCalledWith(items);
      expect(result).toEqual(items);
    });

    it("should throw if payload is not array", async () => {
      await expect(ServicesService.reorderServices({})).rejects.toThrow(
        "Invalid reorder data",
      );
    });
  });
});
