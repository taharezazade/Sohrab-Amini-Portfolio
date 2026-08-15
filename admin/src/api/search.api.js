/** @format */

import api from "./axios";
import { SEARCH_ENDPOINTS } from "./endpoints";

const searchApi = {
  /**
   * Global dashboard search
   *
   * GET /api/search?q=...
   */
  search(query, params = {}) {
    return api.get(SEARCH_ENDPOINTS.SEARCH, {
      params: {
        q: query,
        ...params,
      },
    });
  },
};

export default searchApi;
