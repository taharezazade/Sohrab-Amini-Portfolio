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
        message: "هدر احراز هویت ارسال نشده است.",
      });
    }

    if (!authorization.startsWith("Bearer ")) {
      throw new ApiError({
        statusCode: 401,
        message: "فرمت هدر احراز هویت معتبر نیست.",
      });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      throw new ApiError({
        statusCode: 401,
        message: "توکن دسترسی ارسال نشده است.",
      });
    }

    const decoded = jwt.verify(token, jwtConfig.secret, {
      issuer: jwtConfig.issuer,

      audience: jwtConfig.audience,
    });

    if (!decoded.id) {
      throw new ApiError({
        statusCode: 401,
        message: "اطلاعات داخل توکن معتبر نیست.",
      });
    }

    req.user = {
      id: decoded.id,

      role: decoded.role || null,
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
          message: "توکن نامعتبر یا منقضی شده است.",
        }),
      );
    }

    next(error);
  }
};

export default authMiddleware;
