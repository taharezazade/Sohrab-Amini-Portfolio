/** @format */

import aboutRepository from "../repositories/about.repository.js";

import {
  createAboutSchema,
  updateAboutSchema,
  aboutParamsSchema,
  updateAboutImageSchema,
} from "../validations/about.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class AboutService {
  /* =========================================================
     GET ABOUT
     Singleton
  ========================================================= */

  async getAbout() {
    const about = await aboutRepository.find();

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    return new ApiResponse(200, about, "About section fetched successfully.");
  }

  /* =========================================================
     GET ABOUT BY ID
  ========================================================= */

  async getAboutById(id) {
    aboutParamsSchema.parse({
      id,
    });

    const about = await aboutRepository.findById(id);

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    return new ApiResponse(200, about, "About section fetched successfully.");
  }

  /* =========================================================
     CREATE ABOUT
  ========================================================= */

  async createAbout(payload) {
    const data = createAboutSchema.parse(payload);

    const exists = await aboutRepository.exists();

    if (exists) {
      throw new ApiError(409, "About section already exists.");
    }

    const about = await aboutRepository.create(data);

    return new ApiResponse(201, about, "About section created successfully.");
  }

  /* =========================================================
     UPDATE ABOUT
     Singleton
  ========================================================= */

  async updateAbout(payload) {
    const data = updateAboutSchema.parse(payload);

    const about = await aboutRepository.find();

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    const updatedAbout = await aboutRepository.update(about.id, data);

    return new ApiResponse(
      200,
      updatedAbout,
      "About section updated successfully.",
    );
  }

  /* =========================================================
     UPDATE ABOUT BY ID
  ========================================================= */

  async updateAboutById(id, payload) {
    aboutParamsSchema.parse({
      id,
    });

    const data = updateAboutSchema.parse(payload);

    const about = await aboutRepository.findById(id);

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    const updatedAbout = await aboutRepository.update(id, data);

    return new ApiResponse(
      200,
      updatedAbout,
      "About section updated successfully.",
    );
  }

  /* =========================================================
     UPSERT ABOUT
     Singleton
  ========================================================= */

  async upsertAbout(payload) {
    const data = updateAboutSchema.parse(payload);

    const about = await aboutRepository.upsert(data);

    return new ApiResponse(200, about, "About section saved successfully.");
  }

  /* =========================================================
     DELETE ABOUT
     Singleton
  ========================================================= */

  async deleteAbout() {
    const about = await aboutRepository.find();

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    const deletedAbout = await aboutRepository.delete(about.id);

    return new ApiResponse(
      200,
      deletedAbout,
      "About section deleted successfully.",
    );
  }

  /* =========================================================
     DELETE ABOUT BY ID
  ========================================================= */

  async deleteAboutById(id) {
    aboutParamsSchema.parse({
      id,
    });

    const about = await aboutRepository.findById(id);

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    const deletedAbout = await aboutRepository.delete(id);

    return new ApiResponse(
      200,
      deletedAbout,
      "About section deleted successfully.",
    );
  }

  /* =========================================================
     UPDATE IMAGE
  ========================================================= */

  async updateImage(id, payload) {
    aboutParamsSchema.parse({
      id,
    });

    const data = updateAboutImageSchema.parse(payload);

    const about = await aboutRepository.findById(id);

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    const updatedAbout = await aboutRepository.updateImage(id, data.image);

    return new ApiResponse(
      200,
      updatedAbout,
      "About image updated successfully.",
    );
  }

  /* =========================================================
     CLEAR IMAGE
  ========================================================= */

  async clearImage(id) {
    aboutParamsSchema.parse({
      id,
    });

    const about = await aboutRepository.findById(id);

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    const updatedAbout = await aboutRepository.clearImage(id);

    return new ApiResponse(
      200,
      updatedAbout,
      "About image cleared successfully.",
    );
  }

  /* =========================================================
     EXISTS
  ========================================================= */

  async exists() {
    const exists = await aboutRepository.exists();

    return new ApiResponse(
      200,
      {
        exists,
      },
      "About existence checked successfully.",
    );
  }

  /* =========================================================
     COUNT
  ========================================================= */

  async count() {
    const total = await aboutRepository.count();

    return new ApiResponse(
      200,
      {
        total,
      },
      "About count fetched successfully.",
    );
  }
}

export default new AboutService();
