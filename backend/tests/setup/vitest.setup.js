/** @format */

import { defineConfig } from "vitest/config";
import "./setup.js";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./tests/setup/vitest.setup.js"],
    include: ["tests/**/*.test.js"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json"],
      reportsDirectory: "./coverage",
      exclude: ["node_modules/", "tests/", "uploads/", "coverage/"],
    },
  },
});
