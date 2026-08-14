/** @format */

import servicesService from "../services/services.service.js";

class ServicesController {
  /* =========================================================
     GET ALL
  ========================================================= */

  async getAll(req, res, next) {
    try {
      const data = await servicesService.getAllServices();

      return res.status(200).json({
        success: true,
        message: "سرویس‌ها با موفقیت دریافت شدند.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     GET ACTIVE
  ========================================================= */

  async getActive(req, res, next) {
    try {
      const data = await servicesService.getActiveServices();

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     GET BY ID
  ========================================================= */

  async getById(req, res, next) {
    try {
      const data = await servicesService.getServiceById(req.params.id);

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     CREATE
  ========================================================= */

  async create(req, res, next) {
    try {
      const data = await servicesService.createService(req.body);

      return res.status(201).json({
        success: true,
        message: "سرویس با موفقیت ایجاد شد.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     UPDATE
  ========================================================= */

  async update(req, res, next) {
    try {
      const data = await servicesService.updateService(req.params.id, req.body);

      return res.status(200).json({
        success: true,
        message: "سرویس با موفقیت بروزرسانی شد.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     DELETE
  ========================================================= */

  async delete(req, res, next) {
    try {
      const data = await servicesService.deleteService(req.params.id);

      return res.status(200).json({
        success: true,
        message: "سرویس با موفقیت حذف شد.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     TOGGLE STATUS
  ========================================================= */

  async toggleStatus(req, res, next) {
    try {
      const data = await servicesService.toggleServiceStatus(req.params.id);

      return res.status(200).json({
        success: true,
        message: "وضعیت سرویس بروزرسانی شد.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     REORDER
  ========================================================= */

  async reorder(req, res, next) {
    try {
      const data = await servicesService.reorderServices(req.body);

      return res.status(200).json({
        success: true,
        message: "ترتیب سرویس‌ها بروزرسانی شد.",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     STATS
  ========================================================= */

  async stats(req, res, next) {
    try {
      const data = await servicesService.getStats();

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     TECHNOLOGY SEARCH
  ========================================================= */

  async searchTechnologies(req, res, next) {
    try {
      const query = req.query.q;

      if (!query?.trim()) {
        return res.status(200).json({
          success: true,
          data: [],
        });
      }

      const data = await servicesService.searchTechnologies(query);

      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ServicesController();
