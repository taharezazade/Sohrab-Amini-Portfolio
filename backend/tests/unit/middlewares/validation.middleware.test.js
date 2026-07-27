/** @format */

import { beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";

import validate from "../../../src/middlewares/validation.middleware.js";

describe("Validation Middleware", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
      query: {},
    };

    res = {};

    next = vi.fn();
  });

  /* ============================
      Valid Data
  ============================ */

  it("should validate request successfully", async () => {
    const schema = z.object({
      body: z.object({
        title: z.string(),
      }),
      params: z.object({}),
      query: z.object({}),
    });

    req.body = {
      title: "Professional WordPress Developer",
    };

    const middleware = validate(schema);

    await middleware(req, res, next);

    expect(req.validatedData).toEqual({
      body: {
        title: "Professional WordPress Developer",
      },
      params: {},
      query: {},
    });

    expect(next).toHaveBeenCalledWith();
  });

  /* ============================
      Invalid Body
  ============================ */

  it("should call next with validation error", async () => {
    const schema = z.object({
      body: z.object({
        title: z.string().min(3),
      }),
      params: z.object({}),
      query: z.object({}),
    });

    req.body = {
      title: "A",
    };

    const middleware = validate(schema);

    await middleware(req, res, next);

    const error = next.mock.calls[0][0];

    expect(error).toBeDefined();
    expect(error.name).toBe("ZodError");
  });

  /* ============================
      Validate Params
  ============================ */

  it("should validate request params", async () => {
    const schema = z.object({
      body: z.object({}),
      params: z.object({
        id: z.string(),
      }),
      query: z.object({}),
    });

    req.params = {
      id: "cmf4m3szb0000x9x8u7v6w5q4",
    };

    const middleware = validate(schema);

    await middleware(req, res, next);

    expect(req.validatedData.params.id).toBe("cmf4m3szb0000x9x8u7v6w5q4");

    expect(next).toHaveBeenCalledWith();
  });

  /* ============================
      Validate Query
  ============================ */

  it("should validate request query", async () => {
    const schema = z.object({
      body: z.object({}),
      params: z.object({}),
      query: z.object({
        page: z.string(),
      }),
    });

    req.query = {
      page: "1",
    };

    const middleware = validate(schema);

    await middleware(req, res, next);

    expect(req.validatedData.query.page).toBe("1");

    expect(next).toHaveBeenCalledWith();
  });

  /* ============================
      Async Schema
  ============================ */

  it("should support parseAsync", async () => {
    const schema = z.object({
      body: z.object({
        email: z
          .string()
          .email()
          .refine(async () => true),
      }),
      params: z.object({}),
      query: z.object({}),
    });

    req.body = {
      email: "admin@sohrabamini.ir",
    };

    const middleware = validate(schema);

    await middleware(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });

  /* ============================
      Invalid Query
  ============================ */

  it("should reject invalid query", async () => {
    const schema = z.object({
      body: z.object({}),
      params: z.object({}),
      query: z.object({
        page: z.coerce.number().min(1),
      }),
    });

    req.query = {
      page: "0",
    };

    const middleware = validate(schema);

    await middleware(req, res, next);

    const error = next.mock.calls[0][0];

    expect(error).toBeDefined();
    expect(error.name).toBe("ZodError");
  });
});
