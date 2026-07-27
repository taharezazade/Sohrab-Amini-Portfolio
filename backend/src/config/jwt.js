/** @format */

import env from "./env.js";

const jwtConfig = Object.freeze({
  secret: env.JWT.SECRET,
  expiresIn: env.JWT.EXPIRES_IN || "1d",
  refreshExpiresIn: env.JWT.REFRESH_EXPIRES_IN || "30d",
  issuer: env.JWT.ISSUER || "sohrab-amini-api",
  audience: env.JWT.AUDIENCE || "sohrab-amini-admin",
});

export default jwtConfig;
