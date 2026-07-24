/** @format */

import aboutRepository from "../repositories/about.repository.js";

import {
  createAboutSchema,
  updateAboutSchema,
  aboutParamsSchema,
} from "../validations/about.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class AboutService {
  /* =========================================
      Get About
  ========================================= */

  async getAbout() {
    const about = await aboutRepository.find();

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    return new ApiResponse(200, about, "About section fetched successfully.");
  }

  /* =========================================
      Get About By ID
  ========================================= */

  async getAboutById(id) {
    aboutParamsSchema.parse({ id });

    const about = await aboutRepository.findById(id);

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    return new ApiResponse(200, about, "About section fetched successfully.");
  }

  /* =========================================
      Create About
  ========================================= */

  async createAbout(payload) {
    const data = createAboutSchema.parse(payload);

    const exists = await aboutRepository.exists();

    if (exists) {
      throw new ApiError(409, "About section already exists.");
    }

    const about = await aboutRepository.create({
      title: data.title,
      description: data.description,
      birthYear: data.birthYear,
      location: data.location,
      experience: data.experience,
      image: data.image,
    });

    return new ApiResponse(201, about, "About section created successfully.");
  }

  /* =========================================
      Update About
  ========================================= */

  async updateAbout(id, payload) {
    aboutParamsSchema.parse({ id });

    const data = updateAboutSchema.parse(payload);

    const about = await aboutRepository.findById(id);

    if (!about) {
      throw new ApiError(404, "About section not found.");
    }

    const updatedAbout = await aboutRepository.update(id, {
      title: data.title,
      description: data.description,
      birthYear: data.birthYear,
      location: data.location,
      experience: data.experience,
      image: data.image,
    });

    return new ApiResponse(
      200,
      updatedAbout,
      "About section updated successfully.",
    );
  }
}

export default new AboutService();
