/** @format */

import api from "@/api/axios";
import { ABOUT_ENDPOINTS } from "@/api/endpoints";

const aboutApi = {
  get() {
    return api.get(ABOUT_ENDPOINTS.GET);
  },
};

export default aboutApi;
