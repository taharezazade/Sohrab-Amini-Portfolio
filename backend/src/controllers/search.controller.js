/** @format */

import searchService from "../services/search.service.js";

class SearchController {
  /**
   * GET /api/search?q=wordpress
   */
  async search(req, res) {
    try {
      const query = typeof req.query.q === "string" ? req.query.q.trim() : "";

      if (!query) {
        return res.status(200).json({
          success: true,
          message: "عبارت جستجو وارد نشده است.",
          data: [],
        });
      }

      const results = await searchService.search(query);

      return res.status(200).json({
        success: true,
        message: "نتایج جستجو با موفقیت دریافت شدند.",
        data: results,
      });
    } catch (error) {
      console.error("GLOBAL SEARCH ERROR:", error);

      return res.status(500).json({
        success: false,
        message: "جستجو انجام نشد.",
        data: [],
      });
    }
  }
}

export default new SearchController();
