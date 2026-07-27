/** @format */

import { describe, expect, it, vi } from "vitest";

import ApiError from "../../../src/utils/ApiError.js";

describe("ApiError", () => {
  /* ============================
      Default Values
  ============================ */

  it("should create an ApiError with default values", () => {
    const error = new ApiError();

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ApiError);

    expect(error.name).toBe("ApiError");
    expect(error.success).toBe(false);
    expect(error.statusCode).toBe(500);
    expect(error.message).toBe("Internal Server Error.");
    expect(error.errors).toEqual([]);
    expect(error.timestamp).toBeDefined();
    expect(error.stack).toBeDefined();
  });

  /* ============================
      Custom Values
  ============================ */

  it("should create an ApiError with custom values", () => {
    const errors = [
      {
        field: "email",
        message: "Email is invalid.",
      },
      {
        field: "password",
        message: "Password is required.",
      },
    ];

    const error = new ApiError({
      statusCode: 400,
      message: "Validation failed.",
      errors,
    });

    expect(error.statusCode).toBe(400);
    expect(error.message).toBe("Validation failed.");
    expect(error.errors).toEqual(errors);
    expect(error.success).toBe(false);
    expect(error.name).toBe("ApiError");
  });

  /* ============================
      Timestamp
  ============================ */

  it("should generate a valid ISO timestamp", () => {
    const error = new ApiError();

    expect(() => new Date(error.timestamp)).not.toThrow();

    expect(new Date(error.timestamp).toISOString()).toBe(error.timestamp);
  });

  /* ============================
      Different Status Codes
  ============================ */

  it("should support different HTTP status codes", () => {
    expect(
      new ApiError({
        statusCode: 400,
      }).statusCode,
    ).toBe(400);

    expect(
      new ApiError({
        statusCode: 401,
      }).statusCode,
    ).toBe(401);

    expect(
      new ApiError({
        statusCode: 403,
      }).statusCode,
    ).toBe(403);

    expect(
      new ApiError({
        statusCode: 404,
      }).statusCode,
    ).toBe(404);

    expect(
      new ApiError({
        statusCode: 409,
      }).statusCode,
    ).toBe(409);

    expect(
      new ApiError({
        statusCode: 500,
      }).statusCode,
    ).toBe(500);
  });

  /* ============================
      Empty Errors Array
  ============================ */

  it("should use an empty array when errors are not provided", () => {
    const error = new ApiError({
      message: "Something went wrong.",
    });

    expect(error.errors).toEqual([]);
  });

  /* ============================
      Timestamp Mock
  ============================ */

  it("should use the current system time", () => {
    vi.useFakeTimers();

    const now = new Date("2026-01-01T12:00:00.000Z");

    vi.setSystemTime(now);

    const error = new ApiError();

    expect(error.timestamp).toBe(now.toISOString());

    vi.useRealTimers();
  });
});
