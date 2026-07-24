/** @format */

import ServicesRepository from "../repositories/services.repository.js";

class ServicesService {
  constructor() {
    this.servicesRepository = new ServicesRepository();
  }

  /* ============================
      Create Service
  ============================ */

  async createService(data) {
    const { title, description, icon, features, order, isActive } = data;

    if (!title || !description) {
      throw new Error("Title and description are required");
    }

    const serviceData = {
      title,
      description,
      icon: icon || null,
      features: features || [],
      order: order || 0,
      isActive: isActive ?? true,
    };

    return await this.servicesRepository.create(serviceData);
  }

  /* ============================
      Get All Services
  ============================ */

  async getAllServices() {
    const services = await this.servicesRepository.findAll();

    return services;
  }

  /* ============================
      Get Active Services
  ============================ */

  async getActiveServices() {
    const services = await this.servicesRepository.findActive();

    return services;
  }

  /* ============================
      Get Single Service
  ============================ */

  async getServiceById(id) {
    if (!id) {
      throw new Error("Service id is required");
    }

    const service = await this.servicesRepository.findById(id);

    if (!service) {
      throw new Error("Service not found");
    }

    return service;
  }

  /* ============================
      Update Service
  ============================ */

  async updateService(id, data) {
    if (!id) {
      throw new Error("Service id is required");
    }

    const existingService = await this.servicesRepository.findById(id);

    if (!existingService) {
      throw new Error("Service not found");
    }

    const updateData = {
      ...(data.title && {
        title: data.title,
      }),

      ...(data.description && {
        description: data.description,
      }),

      ...(data.icon && {
        icon: data.icon,
      }),

      ...(data.features && {
        features: data.features,
      }),

      ...(data.order !== undefined && {
        order: data.order,
      }),

      ...(data.isActive !== undefined && {
        isActive: data.isActive,
      }),
    };

    return await this.servicesRepository.update(id, updateData);
  }

  /* ============================
      Delete Service
  ============================ */

  async deleteService(id) {
    if (!id) {
      throw new Error("Service id is required");
    }

    const service = await this.servicesRepository.findById(id);

    if (!service) {
      throw new Error("Service not found");
    }

    return await this.servicesRepository.delete(id);
  }

  /* ============================
      Toggle Status
  ============================ */

  async toggleServiceStatus(id) {
    if (!id) {
      throw new Error("Service id is required");
    }

    const service = await this.servicesRepository.findById(id);

    if (!service) {
      throw new Error("Service not found");
    }

    return await this.servicesRepository.update(id, {
      isActive: !service.isActive,
    });
  }

  /* ============================
      Reorder Services
  ============================ */

  async reorderServices(items) {
    if (!Array.isArray(items)) {
      throw new Error("Invalid reorder data");
    }

    return await this.servicesRepository.updateOrder(items);
  }
}

export default new ServicesService();
