/** @format */

import jwt from "jsonwebtoken";

import jwtConfig from "../config/jwt.js";
import ApiError from "../utils/ApiError.js";

const authMiddleware = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      throw new ApiError({
        statusCode: 401,
        message: "Authorization header is required.",
      });
    }

    if (!authorization.startsWith("Bearer ")) {
      throw new ApiError({
        statusCode: 401,
        message: "Invalid authorization format.",
      });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      throw new ApiError({
        statusCode: 401,
        message: "Access token is required.",
      });
    }

    const decoded = jwt.verify(token, jwtConfig.secret, {
      issuer: jwtConfig.issuer,
      audience: jwtConfig.audience,
    });

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return next(
        new ApiError({
          statusCode: 401,
          message: "Invalid or expired access token.",
        }),
      );
    }

    next(error);
  }
};

export default authMiddleware;
