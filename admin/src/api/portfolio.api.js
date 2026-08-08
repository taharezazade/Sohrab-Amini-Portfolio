/** @format */

import api from "./axios";

import { PORTFOLIO_ENDPOINTS } from "../constants/endpoints";

const getPortfolios = async (params = {}) => {
  const { data } = await api.get(PORTFOLIO_ENDPOINTS.GET_ALL, {
    params,
  });

  return data;
};

const getPortfolioById = async (id) => {
  const { data } = await api.get(PORTFOLIO_ENDPOINTS.GET_BY_ID(id));

  return data;
};

const createPortfolio = async (formData) => {
  const { data } = await api.post(PORTFOLIO_ENDPOINTS.CREATE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const updatePortfolio = async (id, formData) => {
  const { data } = await api.put(PORTFOLIO_ENDPOINTS.UPDATE(id), formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

const deletePortfolio = async (id) => {
  const { data } = await api.delete(PORTFOLIO_ENDPOINTS.DELETE(id));

  return data;
};

const uploadPortfolioImages = async (id, formData) => {
  const { data } = await api.post(
    PORTFOLIO_ENDPOINTS.UPLOAD_IMAGES(id),
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data;
};

const deletePortfolioImage = async (imageId) => {
  const { data } = await api.delete(PORTFOLIO_ENDPOINTS.DELETE_IMAGE(imageId));

  return data;
};

const reorderPortfolios = async (portfolios) => {
  const { data } = await api.patch(PORTFOLIO_ENDPOINTS.REORDER, {
    portfolios,
  });

  return data;
};

const portfolioApi = {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  uploadPortfolioImages,
  deletePortfolioImage,
  reorderPortfolios,
};

export default portfolioApi;
