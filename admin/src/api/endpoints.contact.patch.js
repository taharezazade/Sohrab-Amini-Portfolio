/** @format */

/*
 * Merge these keys into the existing CONTACT_ENDPOINTS object.
 * This file is intentionally separate so it can be copied without
 * replacing the rest of your endpoint definitions.
 */

export const CONTACT_ENDPOINTS_PATCH = {
  GET: "/contact",
  GET_BY_ID: (id) => `/contact/${id}`,
  EXISTS: "/contact/exists",
  COUNT: "/contact/count",

  CREATE: "/contact",
  UPDATE: (id) => `/contact/${id}`,
  UPSERT: "/contact",

  PHONE: (id) => `/contact/${id}/phone`,
  WHATSAPP: (id) => `/contact/${id}/whatsapp`,

  UPDATE_IMAGE: (id) => `/contact/${id}/image`,
  CLEAR_IMAGE: (id) => `/contact/${id}/image`,

  DELETE: (id) => `/contact/${id}`,
};
