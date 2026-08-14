/** @format */

import prisma from "../config/prisma.js";

import servicesRepository from "../repositories/services.repository.js";

import {
  createServiceSchema,
  updateServiceSchema,
  reorderServicesSchema,
} from "../validations/service.validation.js";

import { searchGithubTechnologies } from "../utils/githubTechnologies.js";

class ServicesService {
  /* =========================================================
     CREATE
  ========================================================= */

  async createService(data) {
    const validatedData = createServiceSchema.parse(data);

    return servicesRepository.create({
      title: validatedData.title,

      shortDescription: validatedData.shortDescription ?? null,

      description: validatedData.description,

      icon: validatedData.icon?.trim() || null,

      features: validatedData.features ?? [],

      category: validatedData.category?.trim() || null,

      technologies: validatedData.technologies ?? [],

      color: validatedData.color?.trim() || null,

      order: validatedData.order ?? 0,

      isActive: validatedData.isActive ?? true,
    });
  }

  /* =========================================================
     GET ALL
  ========================================================= */

  async getAllServices() {
    return servicesRepository.findAll();
  }

  /* =========================================================
     GET ACTIVE
  ========================================================= */

  async getActiveServices() {
    return servicesRepository.findActive();
  }

  /* =========================================================
     GET BY ID
  ========================================================= */

  async getServiceById(id) {
    if (!id) {
      const error = new Error("شناسه سرویس الزامی است.");

      error.statusCode = 400;

      throw error;
    }

    const service = await servicesRepository.findById(id);

    if (!service) {
      const error = new Error("سرویس موردنظر پیدا نشد.");

      error.statusCode = 404;

      throw error;
    }

    return service;
  }

  /* =========================================================
     UPDATE
  ========================================================= */

  async updateService(id, data) {
    if (!id) {
      const error = new Error("شناسه سرویس الزامی است.");

      error.statusCode = 400;

      throw error;
    }

    await this.getServiceById(id);

    const validatedData = updateServiceSchema.parse(data);

    return servicesRepository.update(id, {
      ...validatedData,

      shortDescription:
        validatedData.shortDescription !== undefined ?
          validatedData.shortDescription || null
        : undefined,

      icon:
        validatedData.icon !== undefined ?
          validatedData.icon?.trim() || null
        : undefined,

      category:
        validatedData.category !== undefined ?
          validatedData.category?.trim() || null
        : undefined,

      color:
        validatedData.color !== undefined ?
          validatedData.color?.trim() || null
        : undefined,
    });
  }

  /* =========================================================
     DELETE
  ========================================================= */

  async deleteService(id) {
    await this.getServiceById(id);

    await servicesRepository.delete(id);

    return {
      id,
      deleted: true,
    };
  }

  /* =========================================================
     TOGGLE STATUS
  ========================================================= */

  async toggleServiceStatus(id) {
    const service = await this.getServiceById(id);

    return servicesRepository.update(id, {
      isActive: !service.isActive,
    });
  }

  /* =========================================================
     REORDER
  ========================================================= */

  async reorderServices(data) {
    const { items } = reorderServicesSchema.parse(data);

    return prisma.$transaction(
      items.map((item) => servicesRepository.updateOrder(item.id, item.order)),
    );
  }

  /* =========================================================
     STATS
  ========================================================= */

  async getStats() {
    const [total, active, inactive] = await Promise.all([
      servicesRepository.count(),
      servicesRepository.countActive(),
      servicesRepository.countInactive(),
    ]);

    return {
      total,
      active,
      inactive,
    };
  }

  /* =========================================================
     TECHNOLOGY SEARCH
  ========================================================= */

  async searchTechnologies(query) {
    return searchGithubTechnologies(query);
  }
}

export default new ServicesService();
