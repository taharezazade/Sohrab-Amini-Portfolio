/** @format */

import { describe, expect, it } from "vitest";

import pagination from "../../../src/utils/pagination.js";

describe("pagination", () => {
  /* ============================
      Default Values
  ============================ */

  it("should return default pagination values", () => {
    const result = pagination();

    expect(result).toEqual({
      page: 1,
      limit: 10,
      skip: 0,
    });
  });

  /* ============================
      Custom Values
  ============================ */

  it("should calculate skip correctly", () => {
    const result = pagination(3, 20);

    expect(result).toEqual({
      page: 3,
      limit: 20,
      skip: 40,
    });
  });

  /* ============================
      String Inputs
  ============================ */

  it("should convert string values to numbers", () => {
    const result = pagination("2", "15");

    expect(result).toEqual({
      page: 2,
      limit: 15,
      skip: 15,
    });
  });

  /* ============================
      First Page
  ============================ */

  it("should return zero skip for first page", () => {
    const result = pagination(1, 25);

    expect(result.skip).toBe(0);
  });

  /* ============================
      Large Numbers
  ============================ */

  it("should handle large page numbers", () => {
    const result = pagination(100, 10);

    expect(result).toEqual({
      page: 100,
      limit: 10,
      skip: 990,
    });
  });

  /* ============================
      Zero Values
  ============================ */

  it("should accept zero values", () => {
    const result = pagination(0, 0);

    expect(result).toEqual({
      page: 0,
      limit: 0,
      skip: -0,
    });
  });

  /* ============================
      Decimal Values
  ============================ */

  it("should preserve decimal values after Number conversion", () => {
    const result = pagination(2.5, 10.5);

    expect(result).toEqual({
      page: 2.5,
      limit: 10.5,
      skip: 15.75,
    });
  });

  /* ============================
      Invalid Values
  ============================ */

  it("should return NaN for invalid numeric values", () => {
    const result = pagination("abc", "xyz");

    expect(result.page).toBeNaN();
    expect(result.limit).toBeNaN();
    expect(result.skip).toBeNaN();
  });
});
