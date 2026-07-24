/** @format */

import env from "./env.js";

const jwtConfig = {
  secret: env.JWT.SECRET,
  expiresIn: env.JWT.EXPIRES_IN,
};

export default jwtConfig;
