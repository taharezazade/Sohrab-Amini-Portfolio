/** @format */

import fs from "fs/promises";
import path from "path";

import portfolioRepository from "../repositories/portfolio.repository.js";
import { ApiError } from "../utils/ApiError.js";

const normalizeUrl = (value) => {
  if (!value) return null;
  const trimmed = String(value).trim();
  return trimmed || null;
};

const toData = (data) => ({
  title: String(data.title || "").trim(),
  slug: String(data.slug || "").trim(),
  description: String(data.description || "").trim(),
  thumbnail: String(data.thumbnail || "").trim(),
  projectUrl: String(data.projectUrl || "").trim(),
  githubUrl: normalizeUrl(data.githubUrl),
  category: String(data.category || "").trim(),
  technologies: Array.isArray(data.technologies) ? data.technologies : [],
  featured: Boolean(data.featured),
  order: Number(data.order || 0),
  status: data.status,
  challenge: String(data.challenge || "").trim(),
  client: String(data.client || "").trim(),
  duration: String(data.duration || "").trim(),
  features: Array.isArray(data.features) ? data.features : [],
  role: String(data.role || "").trim(),
  solution: String(data.solution || "").trim(),
});

const removeLocalFile = async (value) => {
  if (!value || typeof value !== "string") return;
  if (!value.startsWith("/uploads/")) return;

  const relative = value.replace(/^\/+/, "");
  const filePath = path.resolve(process.cwd(), relative);

  try {
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Portfolio image cleanup failed:", error);
    }
  }
};

class PortfolioService {
  async getAll(query = {}) {
    const { search, status, featured, category } = query;
    let portfolios = await portfolioRepository.findAll();

    if (search?.trim()) {
      const value = search.trim().toLowerCase();

      portfolios = portfolios.filter((portfolio) =>
        [
          portfolio.title,
          portfolio.description,
          portfolio.category,
          portfolio.client,
          portfolio.slug,
        ]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(value)),
      );
    }

    if (status && ["DRAFT", "PUBLISHED", "ARCHIVED"].includes(status)) {
      portfolios = portfolios.filter((item) => item.status === status);
    }

    if (featured !== undefined) {
      const value = featured === true || featured === "true";
      portfolios = portfolios.filter((item) => item.featured === value);
    }

    if (category?.trim()) {
      const value = category.trim().toLowerCase();
      portfolios = portfolios.filter(
        (item) => item.category?.toLowerCase() === value,
      );
    }

    return portfolios;
  }

  async getPublished() {
    return portfolioRepository.findPublished();
  }

  async getFeatured() {
    return portfolioRepository.findFeatured();
  }

  async getById(id) {
    if (!id) throw new ApiError(400, "شناسه نمونه‌کار الزامی است.");

    const portfolio = await portfolioRepository.findById(id);

    if (!portfolio) throw new ApiError(404, "نمونه‌کار پیدا نشد.");

    return portfolio;
  }

  async getBySlug(slug) {
    if (!slug) throw new ApiError(400, "Slug الزامی است.");

    const portfolio = await portfolioRepository.findBySlug(slug);

    if (!portfolio) throw new ApiError(404, "نمونه‌کار پیدا نشد.");

    return portfolio;
  }

  async create(data) {
    if (await portfolioRepository.existsBySlug(data.slug)) {
      throw new ApiError(409, "این Slug قبلاً استفاده شده است.");
    }

    return portfolioRepository.create(toData(data));
  }

  async update(id, data) {
    if (!id) throw new ApiError(400, "شناسه نمونه‌کار الزامی است.");

    const current = await portfolioRepository.findById(id);

    if (!current) throw new ApiError(404, "نمونه‌کار پیدا نشد.");

    if (await portfolioRepository.existsBySlug(data.slug, id)) {
      throw new ApiError(
        409,
        "این Slug قبلاً توسط نمونه‌کار دیگری استفاده شده است.",
      );
    }

    const next = toData(data);

    if (!next.thumbnail) {
      next.thumbnail = current.thumbnail;
    }

    const updated = await portfolioRepository.update(id, next);

    if (current.thumbnail && current.thumbnail !== next.thumbnail) {
      await removeLocalFile(current.thumbnail);
    }

    return updated;
  }

  async delete(id) {
    if (!id) throw new ApiError(400, "شناسه نمونه‌کار الزامی است.");

    const current = await portfolioRepository.findById(id);

    if (!current) throw new ApiError(404, "نمونه‌کار پیدا نشد.");

    const deleted = await portfolioRepository.delete(id);

    await removeLocalFile(current.thumbnail);

    for (const image of current.images || []) {
      await removeLocalFile(image.image);
    }

    return deleted;
  }

  async updateStatus(id, status) {
    if (!id) throw new ApiError(400, "شناسه نمونه‌کار الزامی است.");

    if (!["DRAFT", "PUBLISHED", "ARCHIVED"].includes(status)) {
      throw new ApiError(400, "وضعیت نمونه‌کار معتبر نیست.");
    }

    if (!(await portfolioRepository.existsById(id))) {
      throw new ApiError(404, "نمونه‌کار پیدا نشد.");
    }

    return portfolioRepository.updateStatus(id, status);
  }

  async updateOrder(id, order) {
    if (!id) throw new ApiError(400, "شناسه نمونه‌کار الزامی است.");

    if (!(await portfolioRepository.existsById(id))) {
      throw new ApiError(404, "نمونه‌کار پیدا نشد.");
    }

    const value = Number(order);

    if (!Number.isInteger(value) || value < 0) {
      throw new ApiError(400, "ترتیب نمونه‌کار معتبر نیست.");
    }

    return portfolioRepository.updateOrder(id, value);
  }
}

export default new PortfolioService();
