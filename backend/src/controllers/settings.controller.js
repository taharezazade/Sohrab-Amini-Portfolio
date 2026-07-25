/** @format */

import settingsService from "../services/settings.service.js";

class SettingsController {
  /* ============================
      Create Settings
  ============================ */

  async createSettings(req, res, next) {
    try {
      const settings = await settingsService.createSettings(req.body);

      return res.status(201).json({
        success: true,

        message: "Settings created successfully",

        data: settings,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Get Settings
  ============================ */

  async getSettings(req, res, next) {
    try {
      const settings = await settingsService.getSettings();

      return res.status(200).json({
        success: true,

        message: "Settings fetched successfully",

        data: settings,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update Settings
  ============================ */

  async updateSettings(req, res, next) {
    try {
      const settings = await settingsService.updateSettings(req.body);

      return res.status(200).json({
        success: true,

        message: "Settings updated successfully",

        data: settings,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update SEO Settings
  ============================ */

  async updateSEO(req, res, next) {
    try {
      const settings = await settingsService.updateSEO(req.body);

      return res.status(200).json({
        success: true,

        message: "SEO settings updated successfully",

        data: settings,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update Social Links
  ============================ */

  async updateSocialLinks(req, res, next) {
    try {
      const settings = await settingsService.updateSocialLinks(req.body);

      return res.status(200).json({
        success: true,

        message: "Social links updated successfully",

        data: settings,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete Settings
  ============================ */

  async deleteSettings(req, res, next) {
    try {
      const result = await settingsService.deleteSettings();

      return res.status(200).json({
        success: true,

        message: "Settings deleted successfully",

        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new SettingsController();
