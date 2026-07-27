/** @format */

import { describe, expect, it, vi } from "vitest";

import ApiResponse from "../../../src/utils/ApiResponse.js";

describe("ApiResponse", () => {
  /* ============================
      Default Values
  ============================ */

  it("should create response with default values", () => {
    const response = new ApiResponse();

    expect(response.success).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe("Request completed successfully.");
    expect(response.data).toBeNull();
    expect(response.meta).toBeNull();
    expect(response.timestamp).toBeDefined();
  });

  /* ============================
      Custom Values
  ============================ */

  it("should create response with custom values", () => {
    const data = {
      id: "cmf4m3szb0000x9x8u7v6w5q4",
      title: "Professional WordPress Developer",
    };

    const meta = {
      total: 1,
      page: 1,
    };

    const response = new ApiResponse({
      success: true,
      statusCode: 201,
      message: "Resource created successfully.",
      data,
      meta,
    });

    expect(response.success).toBe(true);
    expect(response.statusCode).toBe(201);
    expect(response.message).toBe("Resource created successfully.");
    expect(response.data).toEqual(data);
    expect(response.meta).toEqual(meta);
  });

  /* ============================
      Timestamp
  ============================ */

  it("should generate ISO timestamp", () => {
    const response = new ApiResponse();

    expect(() => new Date(response.timestamp)).not.toThrow();

    expect(new Date(response.timestamp).toISOString()).toBe(response.timestamp);
  });

  /* ============================
      Different Status Codes
  ============================ */

  it("should support different status codes", () => {
    expect(
      new ApiResponse({
        statusCode: 200,
      }).statusCode,
    ).toBe(200);

    expect(
      new ApiResponse({
        statusCode: 201,
      }).statusCode,
    ).toBe(201);

    expect(
      new ApiResponse({
        statusCode: 204,
      }).statusCode,
    ).toBe(204);

    expect(
      new ApiResponse({
        statusCode: 400,
      }).statusCode,
    ).toBe(400);

    expect(
      new ApiResponse({
        statusCode: 404,
      }).statusCode,
    ).toBe(404);

    expect(
      new ApiResponse({
        statusCode: 500,
      }).statusCode,
    ).toBe(500);
  });

  /* ============================
      Timestamp Mock
  ============================ */

  it("should use current time for timestamp", () => {
    vi.useFakeTimers();

    const now = new Date("2026-01-01T12:00:00.000Z");

    vi.setSystemTime(now);

    const response = new ApiResponse();

    expect(response.timestamp).toBe(now.toISOString());

    vi.useRealTimers();
  });
});
