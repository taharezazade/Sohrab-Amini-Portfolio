/** @format */

import { describe, expect, it, vi } from "vitest";

import catchAsync from "../../../src/utils/catchAsync.js";

describe("catchAsync", () => {
  /* ============================
      Successful Execution
  ============================ */

  it("should call the handler successfully", async () => {
    const req = {};
    const res = {};
    const next = vi.fn();

    const handler = vi.fn().mockResolvedValue();

    const wrappedHandler = catchAsync(handler);

    wrappedHandler(req, res, next);

    await Promise.resolve();

    expect(handler).toHaveBeenCalledWith(req, res, next);
    expect(next).not.toHaveBeenCalled();
  });

  /* ============================
      Rejected Promise
  ============================ */

  it("should pass async errors to next()", async () => {
    const req = {};
    const res = {};
    const next = vi.fn();

    const error = new Error("Unexpected error");

    const handler = vi.fn().mockRejectedValue(error);

    const wrappedHandler = catchAsync(handler);

    wrappedHandler(req, res, next);

    await Promise.resolve();

    expect(next).toHaveBeenCalledWith(error);
  });

  /* ============================
      Thrown Error
  ============================ */

  it("should catch thrown errors from async handler", async () => {
    const req = {};
    const res = {};
    const next = vi.fn();

    const error = new Error("Handler failed");

    const handler = vi.fn(async () => {
      throw error;
    });

    const wrappedHandler = catchAsync(handler);

    wrappedHandler(req, res, next);

    await Promise.resolve();

    expect(next).toHaveBeenCalledWith(error);
  });

  /* ============================
      Return Function
  ============================ */

  it("should return a function", () => {
    const handler = vi.fn();

    const wrappedHandler = catchAsync(handler);

    expect(typeof wrappedHandler).toBe("function");
  });
});
