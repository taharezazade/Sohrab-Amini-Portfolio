/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

import notFoundMiddleware from "../../../src/middlewares/notFound.middleware.js";
import ApiError from "../../../src/utils/ApiError.js";

describe("Not Found Middleware", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      originalUrl: "/api/unknown-route",
    };

    res = {};

    next = vi.fn();
  });

  /* ============================
      Unknown Route
  ============================ */

  it("should call next with ApiError when route does not exist", () => {
    notFoundMiddleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);

    const error = next.mock.calls[0][0];

    expect(error).toBeInstanceOf(ApiError);
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe("Route '/api/unknown-route' not found.");
  });

  /* ============================
      Dynamic Route
  ============================ */

  it("should include requested url in error message", () => {
    req.originalUrl = "/portfolio/test";

    notFoundMiddleware(req, res, next);

    const error = next.mock.calls[0][0];

    expect(error.message).toBe("Route '/portfolio/test' not found.");
  });
});
