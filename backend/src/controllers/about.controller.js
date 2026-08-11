/** @format */

import aboutService from "../services/about.service.js";

class AboutController {
  /* =========================================================
     GET ABOUT
  ========================================================= */

  async getAbout(req, res, next) {
    try {
      const result = await aboutService.getAbout();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     GET ABOUT BY ID
  ========================================================= */

  async getAboutById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await aboutService.getAboutById(id);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     EXISTS
  ========================================================= */

  async exists(req, res, next) {
    try {
      const result = await aboutService.exists();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     COUNT
  ========================================================= */

  async count(req, res, next) {
    try {
      const result = await aboutService.count();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     CREATE
  ========================================================= */

  async createAbout(req, res, next) {
    try {
      const result = await aboutService.createAbout(req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     UPDATE
     Singleton
  ========================================================= */

  async updateAbout(req, res, next) {
    try {
      const result = await aboutService.updateAbout(req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     UPSERT
  ========================================================= */

  async upsertAbout(req, res, next) {
    try {
      const result = await aboutService.upsertAbout(req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     UPDATE BY ID
  ========================================================= */

  async updateAboutById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await aboutService.updateAboutById(id, req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     DELETE
     Singleton
  ========================================================= */

  async deleteAbout(req, res, next) {
    try {
      const result = await aboutService.deleteAbout();

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     DELETE BY ID
  ========================================================= */

  async deleteAboutById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await aboutService.deleteAboutById(id);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     UPDATE IMAGE
  ========================================================= */

  async updateImage(req, res, next) {
    try {
      const { id } = req.params;

      const result = await aboutService.updateImage(id, req.body);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     CLEAR IMAGE
  ========================================================= */

  async clearImage(req, res, next) {
    try {
      const { id } = req.params;

      const result = await aboutService.clearImage(id);

      return res.status(result.statusCode).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new AboutController();
