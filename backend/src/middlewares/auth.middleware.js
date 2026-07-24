/** @format */

import jwt from "jsonwebtoken";

import jwtConfig from "../config/jwt.js";
import ApiError from "../utils/ApiError.js";

const authMiddleware = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      throw new ApiError({
        statusCode: 401,
        message: "Authentication required.",
      });
    }

    const token = header.split(" ")[1];

    const decoded = jwt.verify(token, jwtConfig.secret);

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
