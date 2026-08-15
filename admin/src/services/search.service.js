/** @format */

import searchApi from "@/api/search.api";

const searchService = {
  async search(query, params = {}) {
    const normalizedQuery = query?.trim();

    if (!normalizedQuery) {
      return {
        data: {
          success: true,
          data: [],
        },
      };
    }

    return searchApi.search(normalizedQuery, params);
  },
};

export default searchService;
