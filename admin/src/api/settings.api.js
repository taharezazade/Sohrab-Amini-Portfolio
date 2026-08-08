/** @format */

import api from "./axios";

import { SETTINGS_ENDPOINTS } from "../constants/endpoints";

const getSettings = async () => {
  const { data } = await api.get(SETTINGS_ENDPOINTS.GET);

  return data;
};

const updateSettings = async (formData) => {
  const { data } = await api.put(SETTINGS_ENDPOINTS.UPDATE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const settingsApi = {
  getSettings,
  updateSettings,
};

export default settingsApi;
