/** @format */

import aboutService from "../services/about.service.js";

class AboutController {
  /* =========================================================
     GET ABOUT
  ========================================================= */

  async get(req, res, next) {
    try {
      const about = await aboutService.get();

      return res.status(200).json({
        success: true,
        message: "About information fetched successfully.",
        data: about,
      });
    } catch (error) {
      next(error);
    }
  }

  /* =========================================================
     UPDATE ABOUT
  ========================================================= */

  async update(req, res, next) {
    try {
      const about = await aboutService.update(req.body);

      return res.status(200).json({
        success: true,
        message: "About information updated successfully.",
        data: about,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AboutController();
