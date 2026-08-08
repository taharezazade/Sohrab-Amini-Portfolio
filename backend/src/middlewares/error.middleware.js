/** @format */

import { ZodError } from "zod";

import env from "../config/env.js";
import ApiError from "../utils/ApiError.js";

/* =========================================================
   ERROR MIDDLEWARE
========================================================= */

const errorMiddleware = (error, req, res, next) => {
  let err = error;

  /* =======================================================
     ZOD ERROR
  ======================================================= */

  if (error instanceof ZodError) {
    err = new ApiError(400, "Validation error.", error.issues);
  }

  /* =======================================================
     API ERROR
  ======================================================= */
  else if (!(error instanceof ApiError)) {
    const statusCode =
      Number.isInteger(error?.statusCode) ? error.statusCode
      : Number.isInteger(error?.status) ? error.status
      : 500;

    err = new ApiError(
      statusCode,
      error?.message || "Internal Server Error.",
      error?.errors || [],
    );
  }

  /* =======================================================
     RESPONSE
  ======================================================= */

  const response = {
    success: false,

    statusCode: err.statusCode,

    message: err.message,

    errors: err.errors || [],

    timestamp: err.timestamp,
  };

  /* =======================================================
     DEVELOPMENT STACK
  ======================================================= */

  if (env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  /* =======================================================
     SEND RESPONSE
  ======================================================= */

  return res.status(err.statusCode).json(response);
};

export default errorMiddleware;
