/** @format */

import api from "./axios";

/**
 * Get Hero Data
 */
export const getHero = async () => {
  const response = await api.get("/hero");

  return response.data;
};

/**
 * Update Hero Data
 */
export const updateHero = async (data) => {
  const response = await api.put("/hero", data);

  return response.data;
};

/**
 * Upload Hero Image
 */
export const uploadHeroImage = async (formData) => {
  const response = await api.post("/upload/hero", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

/**
 * Delete Hero Image
 */
export const deleteHeroImage = async (imageId) => {
  const response = await api.delete(`/upload/hero/${imageId}`);

  return response.data;
};
