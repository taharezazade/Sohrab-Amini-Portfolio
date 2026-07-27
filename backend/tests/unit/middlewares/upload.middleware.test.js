/** @format */

import { describe, expect, it } from "vitest";
import multer from "multer";

import upload from "../../../src/middlewares/upload.middleware.js";
import env from "../../../src/config/env.js";

describe("Upload Middleware", () => {
  /* ============================
      Multer Instance
  ============================ */

  it("should export a multer middleware instance", () => {
    expect(upload).toBeDefined();
    expect(typeof upload.single).toBe("function");
    expect(typeof upload.array).toBe("function");
    expect(typeof upload.fields).toBe("function");
  });

  /* ============================
      Memory Storage
  ============================ */

  it("should use memory storage", () => {
    expect(upload.storage).toBeInstanceOf(multer.MemoryStorage);
  });

  /* ============================
      File Size Limit
  ============================ */

  it("should configure max file size from env", () => {
    expect(upload.limits.fileSize).toBe(env.UPLOAD.MAX_FILE_SIZE);
  });

  /* ============================
      Upload Methods
  ============================ */

  it("should expose upload methods", () => {
    expect(upload.single).toBeDefined();
    expect(upload.array).toBeDefined();
    expect(upload.fields).toBeDefined();
    expect(upload.none).toBeDefined();
    expect(upload.any).toBeDefined();
  });
});
