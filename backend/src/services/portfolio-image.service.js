/** @format */

import fs from "fs/promises";
import path from "path";

import portfolioImageRepository from "../repositories/portfolio-image.repository.js";
import portfolioRepository from "../repositories/portfolio.repository.js";
import { ApiError } from "../utils/ApiError.js";

const removeLocalFile = async (value) => {
  if (!value || typeof value !== "string") return;
  if (!value.startsWith("/uploads/")) return;

  try {
    await fs.unlink(path.resolve(process.cwd(), value.replace(/^\/+/, "")));
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Portfolio gallery cleanup failed:", error);
    }
  }
};

class PortfolioImageService {
  async getAll() {
    return portfolioImageRepository.findAll();
  }

  async getByPortfolio(portfolioId) {
    if (!portfolioId) {
      throw new ApiError(400, "شناسه نمونه‌کار الزامی است.");
    }

    if (!(await portfolioRepository.existsById(portfolioId))) {
      throw new ApiError(404, "نمونه‌کار پیدا نشد.");
    }

    return portfolioImageRepository.findByPortfolioId(portfolioId);
  }

  async getById(id) {
    if (!id) throw new ApiError(400, "شناسه تصویر الزامی است.");

    const image = await portfolioImageRepository.findById(id);

    if (!image) throw new ApiError(404, "تصویر نمونه‌کار پیدا نشد.");

    return image;
  }

  async create(data) {
    if (!(await portfolioRepository.existsById(data.portfolioId))) {
      throw new ApiError(404, "نمونه‌کار پیدا نشد.");
    }

    return portfolioImageRepository.create({
      portfolioId: data.portfolioId,
      image: data.image,
      alt: data.alt?.trim() || null,
      order: Number(data.order || 0),
    });
  }

  async createMany(portfolioId, images) {
    if (!portfolioId) {
      throw new ApiError(400, "شناسه نمونه‌کار الزامی است.");
    }

    if (!(await portfolioRepository.existsById(portfolioId))) {
      throw new ApiError(404, "نمونه‌کار پیدا نشد.");
    }

    if (!Array.isArray(images) || images.length === 0) {
      throw new ApiError(400, "حداقل یک تصویر الزامی است.");
    }

    const existingCount =
      await portfolioImageRepository.countByPortfolioId(portfolioId);

    const data = images.map((image, index) => ({
      portfolioId,
      image: typeof image === "string" ? image : image.image,
      alt: typeof image === "string" ? null : image.alt || null,
      order: existingCount + index,
    }));

    await portfolioImageRepository.createMany(data);

    return portfolioImageRepository.findByPortfolioId(portfolioId);
  }

  async update(id, data) {
    const current = await portfolioImageRepository.findById(id);

    if (!current) {
      throw new ApiError(404, "تصویر نمونه‌کار پیدا نشد.");
    }

    const result = await portfolioImageRepository.update(id, {
      ...(data.image !== undefined && { image: data.image }),
      ...(data.alt !== undefined && { alt: data.alt }),
      ...(data.order !== undefined && { order: Number(data.order) }),
    });

    if (data.image && data.image !== current.image) {
      await removeLocalFile(current.image);
    }

    return result;
  }

  async updateOrder(id, order) {
    if (!(await portfolioImageRepository.findById(id))) {
      throw new ApiError(404, "تصویر نمونه‌کار پیدا نشد.");
    }

    const value = Number(order);

    if (!Number.isInteger(value) || value < 0) {
      throw new ApiError(400, "ترتیب تصویر معتبر نیست.");
    }

    return portfolioImageRepository.updateOrder(id, value);
  }

  async delete(id) {
    const current = await portfolioImageRepository.findById(id);

    if (!current) {
      throw new ApiError(404, "تصویر نمونه‌کار پیدا نشد.");
    }

    const deleted = await portfolioImageRepository.delete(id);

    await removeLocalFile(current.image);

    return deleted;
  }

  async deleteByPortfolio(portfolioId) {
    if (!(await portfolioRepository.existsById(portfolioId))) {
      throw new ApiError(404, "نمونه‌کار پیدا نشد.");
    }

    const images =
      await portfolioImageRepository.findByPortfolioId(portfolioId);

    const result =
      await portfolioImageRepository.deleteByPortfolioId(portfolioId);

    await Promise.all(images.map((image) => removeLocalFile(image.image)));

    return result;
  }
}

export default new PortfolioImageService();
