/** @format */

import servicesService from "../services/services.service.js";

class ServicesController {
  /* ============================
      Create Service
  ============================ */

  async createService(req, res, next) {
    try {
      const service = await servicesService.createService(req.body);

      return res.status(201).json({
        success: true,

        message: "Service created successfully",

        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get All Services
  ============================ */

  async getAllServices(req, res, next) {
    try {
      const services = await servicesService.getAllServices();

      return res.status(200).json({
        success: true,

        message: "Services fetched successfully",

        data: services,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Active Services
  ============================ */

  async getActiveServices(req, res, next) {
    try {
      const services = await servicesService.getActiveServices();

      return res.status(200).json({
        success: true,

        message: "Active services fetched successfully",

        data: services,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Single Service
  ============================ */

  async getServiceById(req, res, next) {
    try {
      const { id } = req.params;

      const service = await servicesService.getServiceById(id);

      return res.status(200).json({
        success: true,

        message: "Service fetched successfully",

        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update Service
  ============================ */

  async updateService(req, res, next) {
    try {
      const { id } = req.params;

      const service = await servicesService.updateService(id, req.body);

      return res.status(200).json({
        success: true,

        message: "Service updated successfully",

        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete Service
  ============================ */

  async deleteService(req, res, next) {
    try {
      const { id } = req.params;

      const result = await servicesService.deleteService(id);

      return res.status(200).json({
        success: true,

        message: "Service deleted successfully",

        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Toggle Service Status
  ============================ */

  async toggleServiceStatus(req, res, next) {
    try {
      const { id } = req.params;

      const service = await servicesService.toggleServiceStatus(id);

      return res.status(200).json({
        success: true,

        message: "Service status updated successfully",

        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Reorder Services
  ============================ */

  async reorderServices(req, res, next) {
    try {
      const services = await servicesService.reorderServices(req.body);

      return res.status(200).json({
        success: true,

        message: "Services reordered successfully",

        data: services,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ServicesController();
