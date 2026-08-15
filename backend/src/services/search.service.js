/** @format */

import prisma from "../config/prisma.js";

const SEARCH_URLS = {
  hero: "/hero",
  about: "/about",
  service: "/services",
  portfolio: "/portfolio",
  contact: "/contact",
  settings: "/settings",
};

class SearchService {
  /* =========================================================
     GLOBAL SEARCH
  ========================================================= */

  async search(query) {
    const normalizedQuery = query?.trim();

    if (!normalizedQuery) {
      return [];
    }

    const contains = {
      contains: normalizedQuery,
      mode: "insensitive",
    };

    const results = [];

    /* =======================================================
       HERO
    ======================================================= */

    try {
      const heroes = await this.searchHero(contains);

      results.push(...heroes);
    } catch (error) {
      console.error("SEARCH HERO ERROR:", error);
    }

    /* =======================================================
       ABOUT
    ======================================================= */

    try {
      const about = await this.searchAbout(contains);

      results.push(...about);
    } catch (error) {
      console.error("SEARCH ABOUT ERROR:", error);
    }

    /* =======================================================
       SERVICES
    ======================================================= */

    try {
      const services = await this.searchServices(contains);

      results.push(...services);
    } catch (error) {
      console.error("SEARCH SERVICES ERROR:", error);
    }

    /* =======================================================
       PORTFOLIO
    ======================================================= */

    try {
      const portfolio = await this.searchPortfolio(contains);

      results.push(...portfolio);
    } catch (error) {
      console.error("SEARCH PORTFOLIO ERROR:", error);
    }

    /* =======================================================
       CONTACT
    ======================================================= */

    try {
      const contact = await this.searchContact(contains);

      results.push(...contact);
    } catch (error) {
      console.error("SEARCH CONTACT ERROR:", error);
    }

    /* =======================================================
       SETTINGS
    ======================================================= */

    try {
      const settings = await this.searchSettings(contains);

      results.push(...settings);
    } catch (error) {
      console.error("SEARCH SETTINGS ERROR:", error);
    }

    return results;
  }

  /* =========================================================
     HERO
  ========================================================= */

  async searchHero(where) {
    const items = await prisma.hero.findMany({
      where: {
        OR: [
          {
            title: where,
          },
          {
            description: where,
          },
        ],
      },

      select: {
        id: true,
        title: true,
        description: true,
      },

      take: 10,
    });

    return items.map((item) => ({
      id: item.id,
      type: "hero",
      title: item.title,
      description: item.description || "",
      url: SEARCH_URLS.hero,
    }));
  }

  /* =========================================================
     ABOUT
  ========================================================= */

  async searchAbout(where) {
    const items = await prisma.about.findMany({
      where: {
        OR: [
          {
            title: where,
          },
          {
            description: where,
          },
        ],
      },

      select: {
        id: true,
        title: true,
        description: true,
      },

      take: 10,
    });

    return items.map((item) => ({
      id: item.id,
      type: "about",
      title: item.title,
      description: item.description || "",
      url: SEARCH_URLS.about,
    }));
  }

  /* =========================================================
     SERVICES
  ========================================================= */

  async searchServices(where) {
    const items = await prisma.service.findMany({
      where: {
        OR: [
          {
            title: where,
          },
          {
            shortDescription: where,
          },
          {
            description: where,
          },
          {
            category: where,
          },
        ],
      },

      select: {
        id: true,
        title: true,
        shortDescription: true,
        description: true,
        category: true,
      },

      take: 20,
    });

    return items.map((item) => ({
      id: item.id,
      type: "service",
      title: item.title,
      description:
        item.shortDescription || item.description || item.category || "",
      url: SEARCH_URLS.service,
    }));
  }

  /* =========================================================
     PORTFOLIO
  ========================================================= */

  async searchPortfolio(where) {
    const items = await prisma.portfolio.findMany({
      where: {
        OR: [
          {
            title: where,
          },
          {
            shortDescription: where,
          },
          {
            description: where,
          },
          {
            category: where,
          },
        ],
      },

      select: {
        id: true,
        title: true,
        shortDescription: true,
        description: true,
        category: true,
      },

      take: 20,
    });

    return items.map((item) => ({
      id: item.id,
      type: "portfolio",
      title: item.title,
      description:
        item.shortDescription || item.description || item.category || "",
      url: SEARCH_URLS.portfolio,
    }));
  }

  /* =========================================================
     CONTACT
  ========================================================= */

  async searchContact(where) {
    const items = await prisma.contact.findMany({
      where: {
        OR: [
          {
            title: where,
          },
          {
            description: where,
          },
          {
            phone: where,
          },
          {
            whatsapp: where,
          },
          {
            email: where,
          },
        ],
      },

      select: {
        id: true,
        title: true,
        description: true,
        phone: true,
        whatsapp: true,
        email: true,
      },

      take: 10,
    });

    return items.map((item) => ({
      id: item.id,
      type: "contact",
      title: item.title,
      description:
        item.description || item.phone || item.whatsapp || item.email || "",
      url: SEARCH_URLS.contact,
    }));
  }

  /* =========================================================
     SETTINGS
  ========================================================= */

  async searchSettings(where) {
    const items = await prisma.settings.findMany({
      where: {
        OR: [
          {
            title: where,
          },
          {
            description: where,
          },
        ],
      },

      select: {
        id: true,
        title: true,
        description: true,
      },

      take: 10,
    });

    return items.map((item) => ({
      id: item.id,
      type: "settings",
      title: item.title,
      description: item.description || "",
      url: SEARCH_URLS.settings,
    }));
  }
}

export default new SearchService();
