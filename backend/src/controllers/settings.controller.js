/** @format */

import settingsService from "../services/settings.service.js";

class SettingsController {
  /* =========================================================
     GET SETTINGS
  ========================================================= */

  async getSettings(req, res, next) {
    try {
      const result = await settingsService.getSettings();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     GET SETTINGS BY ID
  ========================================================= */

  async getSettingsById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await settingsService.getSettingsById(id);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     GET EXISTS
  ========================================================= */

  async exists(req, res, next) {
    try {
      const result = await settingsService.exists();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     GET COUNT
  ========================================================= */

  async count(req, res, next) {
    try {
      const result = await settingsService.count();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     POST CREATE SETTINGS
  ========================================================= */

  async createSettings(req, res, next) {
    try {
      const result = await settingsService.createSettings(req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     PUT UPDATE SETTINGS
  ========================================================= */

  async updateSettings(req, res, next) {
    try {
      const { id } = req.params;

      const result = await settingsService.updateSettings(id, req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     PUT UPDATE BRANDING
  ========================================================= */

  async updateBranding(req, res, next) {
    try {
      const { id } = req.params;

      const result = await settingsService.updateBranding(id, req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     PUT UPDATE SEO
  ========================================================= */

  async updateSEO(req, res, next) {
    try {
      const { id } = req.params;

      const result = await settingsService.updateSEO(id, req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     PUT UPDATE SOCIAL
  ========================================================= */

  async updateSocial(req, res, next) {
    try {
      const { id } = req.params;

      const result = await settingsService.updateSocial(id, req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     PUT UPDATE SECURITY
  ========================================================= */

  async updateSecurity(req, res, next) {
    try {
      const { id } = req.params;

      const result = await settingsService.updateSecurity(id, req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     DELETE SETTINGS
  ========================================================= */

  async deleteSettings(req, res, next) {
    try {
      const { id } = req.params;

      const result = await settingsService.deleteSettings(id);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new SettingsController();
