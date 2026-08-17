/** @format */

import portfolioService from "../services/portfolio.service.js";
import {
  createPortfolioSchema,
  updatePortfolioSchema,
  updatePortfolioOrderSchema,
  updatePortfolioStatusSchema,
} from "../validations/portfolio.validation.js";

import ApiResponse from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const parseArray = (value) => {
  if (Array.isArray(value)) return value;

  if (typeof value !== "string") return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
};

const parseBoolean = (value) => value === true || value === "true";

const normalizeBody = (body = {}, file = null) => ({
  ...body,
  thumbnail: file?.publicPath || body.thumbnail || "",
  technologies: parseArray(body.technologies),
  features: parseArray(body.features),
  featured: parseBoolean(body.featured),
  order: Number(body.order || 0),
});

const validate = (schema, data) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new ApiError(
      400,
      result.error.issues?.[0]?.message || "اطلاعات ارسالی معتبر نیست.",
    );
  }

  return result.data;
};

class PortfolioController {
  async getAll(req, res, next) {
    try {
      const result = await portfolioService.getAll(req.query);
      return res
        .status(200)
        .json(ApiResponse.ok(result, "نمونه‌کارها با موفقیت دریافت شدند."));
    } catch (error) {
      return next(error);
    }
  }

  async getPublished(req, res, next) {
    try {
      const result = await portfolioService.getPublished();
      return res
        .status(200)
        .json(ApiResponse.ok(result, "نمونه‌کارهای منتشرشده دریافت شدند."));
    } catch (error) {
      return next(error);
    }
  }

  async getFeatured(req, res, next) {
    try {
      const result = await portfolioService.getFeatured();
      return res
        .status(200)
        .json(ApiResponse.ok(result, "نمونه‌کارهای ویژه دریافت شدند."));
    } catch (error) {
      return next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const result = await portfolioService.getById(req.params.id);
      return res
        .status(200)
        .json(ApiResponse.ok(result, "نمونه‌کار با موفقیت دریافت شد."));
    } catch (error) {
      return next(error);
    }
  }

  async getBySlug(req, res, next) {
    try {
      const result = await portfolioService.getBySlug(req.params.slug);
      return res
        .status(200)
        .json(ApiResponse.ok(result, "نمونه‌کار با موفقیت دریافت شد."));
    } catch (error) {
      return next(error);
    }
  }

  async create(req, res, next) {
    try {
      const body = normalizeBody(req.body, req.file);
      const data = validate(createPortfolioSchema, body);

      const result = await portfolioService.create(data);

      return res
        .status(201)
        .json(ApiResponse.created(result, "نمونه‌کار با موفقیت ایجاد شد."));
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const body = normalizeBody(req.body, req.file);
      const data = validate(updatePortfolioSchema, body);

      const result = await portfolioService.update(req.params.id, data);

      return res
        .status(200)
        .json(
          ApiResponse.updated(
            result,
            "نمونه‌کار با موفقیت به‌روزرسانی شد.",
          ),
        );
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await portfolioService.delete(req.params.id);
      return res
        .status(200)
        .json(ApiResponse.deleted("نمونه‌کار با موفقیت حذف شد."));
    } catch (error) {
      return next(error);
    }
  }

  async updateStatus(req, res, next) {
    try {
      const data = validate(updatePortfolioStatusSchema, req.body);
      const result = await portfolioService.updateStatus(
        req.params.id,
        data.status,
      );

      return res
        .status(200)
        .json(ApiResponse.updated(result, "وضعیت نمونه‌کار با موفقیت تغییر کرد."));
    } catch (error) {
      return next(error);
    }
  }

  async updateOrder(req, res, next) {
    try {
      const data = validate(updatePortfolioOrderSchema, req.body);
      const result = await portfolioService.updateOrder(
        req.params.id,
        data.order,
      );

      return res
        .status(200)
        .json(
          ApiResponse.updated(
            result,
            "ترتیب نمونه‌کار با موفقیت تغییر کرد.",
          ),
        );
    } catch (error) {
      return next(error);
    }
  }
}

export default new PortfolioController();
