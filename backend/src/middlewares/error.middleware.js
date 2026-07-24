/** @format */

import env from "../config/env.js";
import ApiError from "../utils/ApiError.js";

const errorMiddleware = (error, req, res, next) => {
  let err = error;

  if (!(err instanceof ApiError)) {
    err = new ApiError({
      statusCode: err.status || 500,
      message: err.message || "Internal Server Error.",
    });
  }

  const response = {
    success: false,
    statusCode: err.statusCode,
    message: err.message,
    errors: err.errors || [],
    timestamp: err.timestamp,
  };

  if (env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  return res.status(err.statusCode).json(response);
};

export default errorMiddleware;
