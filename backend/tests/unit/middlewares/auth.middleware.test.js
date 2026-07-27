/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";
import jwt from "jsonwebtoken";

import authMiddleware from "../../../src/middlewares/auth.middleware.js";
import jwtConfig from "../../../src/config/jwt.js";
import ApiError from "../../../src/utils/ApiError.js";

vi.mock("jsonwebtoken", () => ({
  default: {
    verify: vi.fn(),
  },
}));

describe("Auth Middleware", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      headers: {},
      user: null,
    };

    res = {};

    next = vi.fn();

    vi.clearAllMocks();
  });

  /* ============================
      Missing Authorization Header
  ============================ */

  it("should return 401 if authorization header is missing", () => {
    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);

    const error = next.mock.calls[0][0];

    expect(error).toBeInstanceOf(ApiError);
    expect(error.statusCode).toBe(401);
    expect(error.message).toBe("Authentication required.");
  });

  /* ============================
      Invalid Authorization Format
  ============================ */

  it("should return 401 if authorization header is invalid", () => {
    req.headers.authorization = "InvalidToken";

    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);

    const error = next.mock.calls[0][0];

    expect(error).toBeInstanceOf(ApiError);
    expect(error.statusCode).toBe(401);
  });

  /* ============================
      Valid Token
  ============================ */

  it("should verify token and attach user to request", () => {
    const decoded = {
      id: "cmf4m3szb0000x9x8u7v6w5q4",
      role: "ADMIN",
    };

    req.headers.authorization = "Bearer valid-token";

    jwt.verify.mockReturnValue(decoded);

    authMiddleware(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith("valid-token", jwtConfig.secret);

    expect(req.user).toEqual(decoded);

    expect(next).toHaveBeenCalledWith();
  });

  /* ============================
      Invalid Token
  ============================ */

  it("should call next with jwt error", () => {
    const jwtError = new Error("Invalid token");

    req.headers.authorization = "Bearer invalid-token";

    jwt.verify.mockImplementation(() => {
      throw jwtError;
    });

    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(jwtError);
  });

  /* ============================
      Expired Token
  ============================ */

  it("should handle expired token", () => {
    const jwtError = new Error("jwt expired");

    req.headers.authorization = "Bearer expired-token";

    jwt.verify.mockImplementation(() => {
      throw jwtError;
    });

    authMiddleware(req, res, next);

    expect(next).toHaveBeenCalledWith(jwtError);
  });
});
