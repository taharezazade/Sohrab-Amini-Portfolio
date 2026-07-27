/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

import errorMiddleware from "../../../src/middlewares/error.middleware.js";
import ApiError from "../../../src/utils/ApiError.js";
import env from "../../../src/config/env.js";

describe("Error Middleware", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {};

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };

    next = vi.fn();
  });

  /* ============================
      ApiError
  ============================ */

  it("should handle ApiError correctly", () => {
    const error = new ApiError({
      statusCode: 404,
      message: "Resource not found.",
    });

    errorMiddleware(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        statusCode: 404,
        message: "Resource not found.",
        errors: [],
      }),
    );
  });

  /* ============================
      Normal Error
  ============================ */

  it("should convert normal Error to ApiError", () => {
    const error = new Error("Something went wrong");

    errorMiddleware(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        statusCode: 500,
        message: "Something went wrong",
      }),
    );
  });

  /* ============================
      Custom Status
  ============================ */

  it("should use custom error status", () => {
    const error = new Error("Forbidden");

    error.status = 403;

    errorMiddleware(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        statusCode: 403,
        message: "Forbidden",
      }),
    );
  });

  /* ============================
      Default Message
  ============================ */

  it("should use default message when error message is missing", () => {
    const error = {
      status: 500,
    };

    errorMiddleware(error, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        statusCode: 500,
        message: "Internal Server Error.",
      }),
    );
  });

  /* ============================
      Development Stack
  ============================ */

  it("should include stack in development mode", () => {
    const nodeEnv = env.NODE_ENV;

    env.NODE_ENV = "development";

    const error = new ApiError({
      statusCode: 500,
      message: "Development error",
    });

    errorMiddleware(error, req, res, next);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        stack: expect.any(String),
      }),
    );

    env.NODE_ENV = nodeEnv;
  });

  /* ============================
      Production Stack
  ============================ */

  it("should not include stack in production mode", () => {
    const nodeEnv = env.NODE_ENV;

    env.NODE_ENV = "production";

    const error = new ApiError({
      statusCode: 500,
      message: "Production error",
    });

    errorMiddleware(error, req, res, next);

    const response = res.json.mock.calls[0][0];

    expect(response.stack).toBeUndefined();

    env.NODE_ENV = nodeEnv;
  });
});
