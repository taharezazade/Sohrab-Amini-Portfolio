/** @format */

import portfolioImageService from "../services/portfolio-image.service.js";
import {
  createPortfolioImageSchema,
  updatePortfolioImageSchema,
  updatePortfolioImageOrderSchema,
} from "../validations/portfolio-image.validation.js";

import ApiResponse from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const validate = (schema, data) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new ApiError(
      400,
      result.error.issues?.[0]?.message || "اطلاعات تصویر معتبر نیست.",
    );
  }

  return result.data;
};

class PortfolioImageController {
  async getAll(req, res, next) {
    try {
      const result = await portfolioImageService.getAll();
      return res
        .status(200)
        .json(ApiResponse.ok(result, "تصاویر نمونه‌کارها دریافت شدند."));
    } catch (error) {
      return next(error);
    }
  }

  async getByPortfolio(req, res, next) {
    try {
      const result = await portfolioImageService.getByPortfolio(
        req.params.portfolioId,
      );

      return res
        .status(200)
        .json(ApiResponse.ok(result, "تصاویر نمونه‌کار دریافت شدند."));
    } catch (error) {
      return next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const result = await portfolioImageService.getById(req.params.imageId);

      return res
        .status(200)
        .json(ApiResponse.ok(result, "تصویر نمونه‌کار دریافت شد."));
    } catch (error) {
      return next(error);
    }
  }

  async create(req, res, next) {
    try {
      const payload = {
        portfolioId: req.params.portfolioId,
        image: req.file?.publicPath || req.body.image,
        alt: req.body.alt,
        order: req.body.order,
      };

      const data = validate(createPortfolioImageSchema, payload);
      const result = await portfolioImageService.create(data);

      return res
        .status(201)
        .json(
          ApiResponse.created(result, "تصویر نمونه‌کار با موفقیت ایجاد شد."),
        );
    } catch (error) {
      return next(error);
    }
  }

  async uploadMany(req, res, next) {
    try {
      const files = (req.files || []).map((file) => ({
        image: file.publicPath,
        alt: req.body.alt || null,
      }));

      if (!files.length) {
        throw new ApiError(400, "حداقل یک تصویر انتخاب کنید.");
      }

      const result = await portfolioImageService.createMany(
        req.params.portfolioId,
        files,
      );

      return res
        .status(201)
        .json(
          ApiResponse.created(result, "تصاویر نمونه‌کار با موفقیت آپلود شدند."),
        );
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const payload = {
        image: req.file?.publicPath || req.body.image,
        alt: req.body.alt,
        order: req.body.order,
      };

      const clean = Object.fromEntries(
        Object.entries(payload).filter(([, value]) => value !== undefined),
      );

      const data = validate(updatePortfolioImageSchema, clean);
      const result = await portfolioImageService.update(
        req.params.imageId,
        data,
      );

      return res
        .status(200)
        .json(
          ApiResponse.updated(
            result,
            "تصویر نمونه‌کار با موفقیت به‌روزرسانی شد.",
          ),
        );
    } catch (error) {
      return next(error);
    }
  }

  async updateOrder(req, res, next) {
    try {
      const data = validate(updatePortfolioImageOrderSchema, req.body);

      const result = await portfolioImageService.updateOrder(
        req.params.imageId,
        data.order,
      );

      return res
        .status(200)
        .json(ApiResponse.updated(result, "ترتیب تصویر با موفقیت تغییر کرد."));
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await portfolioImageService.delete(req.params.imageId);

      return res
        .status(200)
        .json(ApiResponse.deleted("تصویر نمونه‌کار با موفقیت حذف شد."));
    } catch (error) {
      return next(error);
    }
  }

  async deleteByPortfolio(req, res, next) {
    try {
      await portfolioImageService.deleteByPortfolio(req.params.portfolioId);

      return res
        .status(200)
        .json(ApiResponse.deleted("تمام تصاویر نمونه‌کار حذف شدند."));
    } catch (error) {
      return next(error);
    }
  }

  /* =========================================================
   UPLOAD MANY
========================================================= */

  async uploadMany(req, res, next) {
    try {
      const portfolioId = req.params.portfolioId;

      const files = req.files || [];

      const images = files.map((file) => ({
        image: file.publicPath,
        alt: req.body?.alt?.trim() || null,
      }));

      const result = await portfolioImageService.createMany(
        portfolioId,
        images,
      );

      return res
        .status(201)
        .json(
          ApiResponse.created(result, "تصاویر نمونه‌کار با موفقیت آپلود شدند."),
        );
    } catch (error) {
      return next(error);
    }
  }
}

export default new PortfolioImageController();
