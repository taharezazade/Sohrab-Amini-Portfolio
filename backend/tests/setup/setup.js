/** @format */

import { beforeAll, beforeEach, afterEach, afterAll, vi } from "vitest";
import prisma from "../../src/config/prisma.js";

beforeAll(async () => {
  await prisma.$connect();
});

beforeAll(async () => {
  process.env.NODE_ENV = "test";
});

afterAll(async () => {});

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(async () => {
  vi.restoreAllMocks();
});

afterAll(async () => {
  await prisma.$disconnect();
});
