/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";

import logger from "../../../src/utils/logger.js";

describe("logger", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  /* ============================
      Info
  ============================ */

  it("should log info messages", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    logger.info("Application started");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("ℹ️  Application started");
  });

  /* ============================
      Success
  ============================ */

  it("should log success messages", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    logger.success("Portfolio created successfully");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("✅ Portfolio created successfully");
  });

  /* ============================
      Warn
  ============================ */

  it("should log warning messages", () => {
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});

    logger.warn("Portfolio image is missing");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("⚠️  Portfolio image is missing");
  });

  /* ============================
      Error
  ============================ */

  it("should log error messages", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    logger.error("Database connection failed");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("❌ Database connection failed");
  });
});
