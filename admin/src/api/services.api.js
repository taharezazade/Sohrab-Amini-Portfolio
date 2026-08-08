/** @format */

import api from "./axios";

import { SERVICES_ENDPOINTS } from "../constants/endpoints";

const getServices = async (params = {}) => {
  const { data } = await api.get(SERVICES_ENDPOINTS.GET_ALL, {
    params,
  });

  return data;
};

const getServiceById = async (id) => {
  const { data } = await api.get(SERVICES_ENDPOINTS.GET_BY_ID(id));

  return data;
};

const createService = async (payload) => {
  const { data } = await api.post(SERVICES_ENDPOINTS.CREATE, payload);

  return data;
};

const updateService = async (id, payload) => {
  const { data } = await api.put(SERVICES_ENDPOINTS.UPDATE(id), payload);

  return data;
};

const deleteService = async (id) => {
  const { data } = await api.delete(SERVICES_ENDPOINTS.DELETE(id));

  return data;
};

const reorderServices = async (services) => {
  const { data } = await api.patch(SERVICES_ENDPOINTS.REORDER, {
    services,
  });

  return data;
};

const servicesApi = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  reorderServices,
};

export default servicesApi;
