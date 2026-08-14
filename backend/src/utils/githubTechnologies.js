/** @format */

const GITHUB_API_URL = "https://api.github.com";

/* =========================================================
   CACHE
========================================================= */

const cache = new Map();

const CACHE_TTL = 10 * 60 * 1000;

/* =========================================================
   NORMALIZE
========================================================= */

function normalizeTechnology(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ");
}

/* =========================================================
   SEARCH
========================================================= */

export async function searchGithubTechnologies(query) {
  const normalizedQuery = normalizeTechnology(query);

  if (!normalizedQuery) {
    return [];
  }

  const cacheKey = normalizedQuery.toLowerCase();

  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  const url =
    `${GITHUB_API_URL}/search/repositories` +
    `?q=${encodeURIComponent(normalizedQuery)}` +
    `&sort=stars` +
    `&order=desc` +
    `&per_page=20`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "Sohrab-Amini-Portfolio",
    },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API Error: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();

  const technologies = new Set();

  for (const repository of data.items || []) {
    if (repository.language) {
      technologies.add(repository.language);
    }

    if (Array.isArray(repository.topics)) {
      repository.topics.forEach((topic) => {
        technologies.add(topic);
      });
    }
  }

  /*
   * خود عبارت سرچ را هم نگه می‌داریم.
   * مثلاً اگر کاربر "React" سرچ کند،
   * React هم در نتایج باشد.
   */
  technologies.add(normalizedQuery);

  const result = [...technologies]
    .map(normalizeTechnology)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);

  cache.set(cacheKey, {
    timestamp: Date.now(),
    data: result,
  });

  return result;
}
