/** @format */

import settingsRepository from "../repositories/settings.repository.js";

import {
  createSettingsSchema,
  updateSettingsSchema,
  settingsParamsSchema,
  updateSecuritySettingsSchema,
  updateBrandingSchema,
  updateSeoSchema,
  updateSocialSchema,
} from "../validations/settings.validation.js";

import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

class SettingsService {
  /* =========================================================
     Get Settings
  ========================================================= */

  async getSettings() {
    const settings = await settingsRepository.find();

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    return new ApiResponse(200, settings, "Settings fetched successfully.");
  }

  /* =========================================================
     Get Settings By ID
  ========================================================= */

  async getSettingsById(id) {
    settingsParamsSchema.parse({
      id,
    });

    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    return new ApiResponse(200, settings, "Settings fetched successfully.");
  }

  /* =========================================================
     Create Settings
  ========================================================= */

  async createSettings(payload) {
    const data = createSettingsSchema.parse(payload);

    const exists = await settingsRepository.exists();

    if (exists) {
      throw new ApiError(409, "Settings already exist.");
    }

    const settings = await settingsRepository.create(data);

    return new ApiResponse(201, settings, "Settings created successfully.");
  }

  /* =========================================================
     Update Settings
  ========================================================= */

  async updateSettings(id, payload) {
    settingsParamsSchema.parse({
      id,
    });

    const data = updateSettingsSchema.parse(payload);

    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    const updatedSettings = await settingsRepository.update(id, data);

    return new ApiResponse(
      200,
      updatedSettings,
      "Settings updated successfully.",
    );
  }

  /* =========================================================
     Upsert Settings
  ========================================================= */

  async upsertSettings(payload) {
    const data = createSettingsSchema.parse(payload);

    const settings = await settingsRepository.upsert(data);

    return new ApiResponse(200, settings, "Settings saved successfully.");
  }

  /* =========================================================
     Update Branding
  ========================================================= */

  async updateBranding(id, payload) {
    settingsParamsSchema.parse({
      id,
    });

    const data = updateBrandingSchema.parse(payload);

    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    const updatedSettings = await settingsRepository.updateBranding(id, data);

    return new ApiResponse(
      200,
      updatedSettings,
      "Branding settings updated successfully.",
    );
  }

  /* =========================================================
     Update SEO
  ========================================================= */

  async updateSEO(id, payload) {
    settingsParamsSchema.parse({
      id,
    });

    const data = updateSeoSchema.parse(payload);

    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    const updatedSettings = await settingsRepository.updateSEO(id, data);

    return new ApiResponse(
      200,
      updatedSettings,
      "SEO settings updated successfully.",
    );
  }

  /* =========================================================
     Update Social
  ========================================================= */

  async updateSocial(id, payload) {
    settingsParamsSchema.parse({
      id,
    });

    const data = updateSocialSchema.parse(payload);

    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    const updatedSettings = await settingsRepository.updateSocial(id, data);

    return new ApiResponse(
      200,
      updatedSettings,
      "Social settings updated successfully.",
    );
  }

  /* =========================================================
     Update Security
  ========================================================= */

  async updateSecurity(id, payload) {
    settingsParamsSchema.parse({
      id,
    });

    const data = updateSecuritySettingsSchema.parse(payload);

    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    const updatedSettings = await settingsRepository.updateSecurity(id, data);

    return new ApiResponse(
      200,
      updatedSettings,
      "Security settings updated successfully.",
    );
  }

  /* =========================================================
     Delete Settings
  ========================================================= */

  async deleteSettings(id) {
    settingsParamsSchema.parse({
      id,
    });

    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new ApiError(404, "Settings not found.");
    }

    await settingsRepository.delete(id);

    return new ApiResponse(200, null, "Settings deleted successfully.");
  }

  /* =========================================================
     Exists
  ========================================================= */

  async exists() {
    const exists = await settingsRepository.exists();

    return new ApiResponse(
      200,
      {
        exists,
      },
      "Settings existence checked successfully.",
    );
  }

  /* =========================================================
     Count
  ========================================================= */

  async count() {
    const total = await settingsRepository.count();

    return new ApiResponse(
      200,
      {
        total,
      },
      "Settings count fetched successfully.",
    );
  }
}

export default new SettingsService();
