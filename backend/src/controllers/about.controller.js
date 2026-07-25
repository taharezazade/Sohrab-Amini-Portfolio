/** @format */

import aboutService from "../services/about.service.js";

class AboutController {
  /* ============================
      Get About
  ============================ */

  async getAbout(req, res, next) {
    try {
      const about = await aboutService.getAbout();

      return res.status(200).json({
        success: true,

        message: "About information fetched successfully",

        data: about,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Create About
  ============================ */

  async createAbout(req, res, next) {
    try {
      const about = await aboutService.createAbout(req.body);

      return res.status(201).json({
        success: true,

        message: "About information created successfully",

        data: about,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update About
  ============================ */

  async updateAbout(req, res, next) {
    try {
      const about = await aboutService.updateAbout(req.body);

      return res.status(200).json({
        success: true,

        message: "About information updated successfully",

        data: about,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete About
  ============================ */

  async deleteAbout(req, res, next) {
    try {
      const about = await aboutService.deleteAbout();

      return res.status(200).json({
        success: true,

        message: "About information deleted successfully",

        data: about,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AboutController();
