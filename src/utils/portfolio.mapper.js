/** @format */

import {
  Buildings2,
  BagHappy,
  Briefcase,
  ShieldSecurity,
  Teacher,
  Building,
  Code1,
  Global,
  Shop,
} from "iconsax-reactjs";

/* =========================================================
   BACKEND URL
========================================================= */

function getApiOrigin() {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    return "";
  }

  try {
    return new URL(apiUrl).origin;
  } catch {
    return apiUrl.replace(/\/api\/?$/, "");
  }
}

/* =========================================================
   IMAGE URL
========================================================= */

export function getPortfolioImageUrl(value) {
  if (!value || typeof value !== "string") {
    return "";
  }

  const source = value.trim();

  if (!source) {
    return "";
  }

  if (/^(https?:)?\/\//i.test(source) || source.startsWith("data:")) {
    return source;
  }

  const origin = getApiOrigin();

  if (!origin) {
    return source;
  }

  if (source.startsWith("/")) {
    return `${origin}${source}`;
  }

  return `${origin}/${source}`;
}

/* =========================================================
   ICON
========================================================= */

const categoryIconMap = {
  شرکتی: Buildings2,
  فروشگاهی: BagHappy,
  تجاری: Briefcase,
  صنعتی: Building,
  آزمایشگاهی: Teacher,
  فناوری: Code1,
  خدمات: Global,
  خیریه: ShieldSecurity,
  WordPress: Global,
  WooCommerce: Shop,
};

function getPortfolioIcon(category) {
  return categoryIconMap[category] || Global;
}

/* =========================================================
   DOMAIN
========================================================= */

function getDomain(url, slug) {
  if (!url) {
    return slug || "";
  }

  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return slug || url;
  }
}

/* =========================================================
   GALLERY
========================================================= */

function normalizeImages(images) {
  if (!Array.isArray(images)) {
    return [];
  }

  return [...images]
    .filter((item) => item && typeof item === "object")
    .sort(
      (a, b) =>
        Number(a.order ?? 0) - Number(b.order ?? 0),
    )
    .map((item) => ({
      id: item.id,
      url: getPortfolioImageUrl(item.image),
      alt: item.alt || "",
      order: Number(item.order ?? 0),
    }))
    .filter((item) => item.url);
}

/* =========================================================
   PORTFOLIO NORMALIZER
========================================================= */

export function normalizePortfolio(item) {
  if (!item || typeof item !== "object") {
    return null;
  }

  const images = normalizeImages(item.images);

  const thumbnail = getPortfolioImageUrl(item.thumbnail);

  const gallery = [
    thumbnail,
    ...images.map((image) => image.url),
  ].filter(Boolean);

  const uniqueGallery = [...new Set(gallery)];

  const liveUrl = item.projectUrl || "";

  return {
    id: item.id,

    title: item.title ?? "",
    slug: item.slug ?? "",
    description: item.description ?? "",

    category: item.category ?? "",

    technologies: Array.isArray(item.technologies)
      ? item.technologies.filter(Boolean)
      : [],

    featured: Boolean(item.featured),

    order: Number(item.order ?? 0),

    status: item.status ?? "PUBLISHED",

    thumbnail,

    image: uniqueGallery[0] || "",

    gallery: uniqueGallery,

    imageAlts: images.map((image) => image.alt),

    images,

    projectUrl: liveUrl,
    liveUrl,

    githubUrl: item.githubUrl || "",

    domain: getDomain(liveUrl, item.slug),

    /*
     * These fields are kept optional because the current
     * Prisma Portfolio model does not expose them.
     * If Backend later returns them, the public UI will
     * display them without another structural change.
     */
    client: item.client ?? "",
    duration: item.duration ?? "",
    role: item.role ?? "",
    challenge: item.challenge ?? "",
    solution: item.solution ?? "",
    features: Array.isArray(item.features)
      ? item.features.filter(Boolean)
      : [],

    createdAt: item.createdAt,
    updatedAt: item.updatedAt,

    icon: getPortfolioIcon(item.category),
  };
}
