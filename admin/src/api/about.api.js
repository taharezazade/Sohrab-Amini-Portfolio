/** @format */

import api from "./axios";

import { ABOUT_ENDPOINTS } from "../constants/endpoints";

const getAbout = async () => {
  const { data } = await api.get(ABOUT_ENDPOINTS.GET);

  return data;
};

const updateAbout = async (formData) => {
  const { data } = await api.put(ABOUT_ENDPOINTS.UPDATE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const aboutApi = {
  getAbout,
  updateAbout,
};

export default aboutApi;
