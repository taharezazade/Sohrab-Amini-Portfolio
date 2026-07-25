/** @format */

import heroService from "../services/hero.service.js";

class HeroController {
  /* ============================
      Get Hero
  ============================ */

  async getHero(req, res, next) {
    try {
      const hero = await heroService.getHero();

      return res.status(200).json({
        success: true,

        message: "Hero information fetched successfully",

        data: hero,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Create Hero
  ============================ */

  async createHero(req, res, next) {
    try {
      const hero = await heroService.createHero(req.body);

      return res.status(201).json({
        success: true,

        message: "Hero information created successfully",

        data: hero,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Update Hero
  ============================ */

  async updateHero(req, res, next) {
    try {
      const hero = await heroService.updateHero(req.body);

      return res.status(200).json({
        success: true,

        message: "Hero information updated successfully",

        data: hero,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete Hero
  ============================ */

  async deleteHero(req, res, next) {
    try {
      const hero = await heroService.deleteHero();

      return res.status(200).json({
        success: true,

        message: "Hero information deleted successfully",

        data: hero,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new HeroController();
