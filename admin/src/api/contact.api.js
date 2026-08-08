/** @format */

import api from "./axios";

import { CONTACT_ENDPOINTS } from "../constants/endpoints";

const getContact = async () => {
  const { data } = await api.get(CONTACT_ENDPOINTS.GET);

  return data;
};

const updateContact = async (formData) => {
  const { data } = await api.put(CONTACT_ENDPOINTS.UPDATE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const contactApi = {
  getContact,
  updateContact,
};

export default contactApi;
