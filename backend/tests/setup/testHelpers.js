/** @format */

import { vi } from "vitest";
import fs from "fs";
import path from "path";

export function createMockFile(filename = "test-image.jpg") {
  return {
    fieldname: "image",
    originalname: filename,
    encoding: "7bit",
    mimetype: "image/jpeg",
    destination: "tests/uploads/temp",
    filename,
    path: path.join("tests/uploads/temp", filename),
    size: 1024,
  };
}

export function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

export function createMockRequest(overrides = {}) {
  return {
    body: {},
    params: {},
    query: {},
    file: null,
    files: [],
    headers: {},
    user: null,
    ...overrides,
  };
}

export function createMockResponse() {
  const res = {};

  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.send = vi.fn().mockReturnValue(res);
  res.end = vi.fn().mockReturnValue(res);

  return res;
}

export function createNextFunction() {
  return vi.fn();
}

export function sleep(ms = 100) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
