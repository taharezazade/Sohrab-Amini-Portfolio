/** @format */

import prisma from "../config/prisma.js";

class SettingsRepository {
  /* =========================================================
     Find Settings
  ========================================================= */

  async find() {
    return await prisma.setting.findFirst({
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  /* =========================================================
     Find Settings By ID
  ========================================================= */

  async findById(id) {
    return await prisma.setting.findUnique({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     Create Settings
  ========================================================= */

  async create(data) {
    return await prisma.setting.create({
      data: {
        siteName: data.siteName,
        siteTitle: data.siteTitle,
        description: data.description,

        phone: data.phone ?? null,
        email: data.email ?? null,

        logo: data.logo ?? null,
        favicon: data.favicon ?? null,

        metaTitle: data.metaTitle ?? null,
        metaDescription: data.metaDescription ?? null,
        keywords: data.keywords ?? null,
        canonicalUrl: data.canonicalUrl ?? null,

        instagram: data.instagram ?? null,
        linkedin: data.linkedin ?? null,
        github: data.github ?? null,
        telegram: data.telegram ?? null,
        twitter: data.twitter ?? null,
        whatsapp: data.whatsapp ?? null,

        maintenanceMode: data.maintenanceMode ?? false,

        twoFactor: data.twoFactor ?? false,

        allowRegistration: data.allowRegistration ?? false,
      },
    });
  }

  /* =========================================================
     Update Settings
  ========================================================= */

  async update(id, data) {
    return await prisma.setting.update({
      where: {
        id,
      },
      data,
    });
  }

  /* =========================================================
     Upsert Settings
     Singleton Settings
  ========================================================= */

  async upsert(data) {
    const settings = await this.find();

    if (settings) {
      return await prisma.setting.update({
        where: {
          id: settings.id,
        },
        data,
      });
    }

    return await this.create(data);
  }

  /* =========================================================
     Delete Settings
  ========================================================= */

  async delete(id) {
    return await prisma.setting.delete({
      where: {
        id,
      },
    });
  }

  /* =========================================================
     Exists
  ========================================================= */

  async exists() {
    const settings = await prisma.setting.findFirst({
      select: {
        id: true,
      },
    });

    return Boolean(settings);
  }

  /* =========================================================
     Count
  ========================================================= */

  async count() {
    return await prisma.setting.count();
  }

  /* =========================================================
     Update Branding
  ========================================================= */

  async updateBranding(id, data) {
    const updateData = {};

    if (data.logo !== undefined) {
      updateData.logo = data.logo;
    }

    if (data.favicon !== undefined) {
      updateData.favicon = data.favicon;
    }

    return await prisma.setting.update({
      where: {
        id,
      },
      data: updateData,
    });
  }

  /* =========================================================
     Update SEO
  ========================================================= */

  async updateSEO(id, data) {
    const updateData = {};

    if (data.metaTitle !== undefined) {
      updateData.metaTitle = data.metaTitle;
    }

    if (data.metaDescription !== undefined) {
      updateData.metaDescription = data.metaDescription;
    }

    if (data.keywords !== undefined) {
      updateData.keywords = data.keywords;
    }

    if (data.canonicalUrl !== undefined) {
      updateData.canonicalUrl = data.canonicalUrl;
    }

    return await prisma.setting.update({
      where: {
        id,
      },
      data: updateData,
    });
  }

  /* =========================================================
     Update Social
  ========================================================= */

  async updateSocial(id, data) {
    const updateData = {};

    if (data.instagram !== undefined) {
      updateData.instagram = data.instagram;
    }

    if (data.linkedin !== undefined) {
      updateData.linkedin = data.linkedin;
    }

    if (data.github !== undefined) {
      updateData.github = data.github;
    }

    if (data.telegram !== undefined) {
      updateData.telegram = data.telegram;
    }

    if (data.twitter !== undefined) {
      updateData.twitter = data.twitter;
    }

    if (data.whatsapp !== undefined) {
      updateData.whatsapp = data.whatsapp;
    }

    return await prisma.setting.update({
      where: {
        id,
      },
      data: updateData,
    });
  }

  /* =========================================================
     Update Security
  ========================================================= */

  async updateSecurity(id, data) {
    const updateData = {};

    if (data.maintenanceMode !== undefined) {
      updateData.maintenanceMode = data.maintenanceMode;
    }

    if (data.twoFactor !== undefined) {
      updateData.twoFactor = data.twoFactor;
    }

    if (data.allowRegistration !== undefined) {
      updateData.allowRegistration = data.allowRegistration;
    }

    return await prisma.setting.update({
      where: {
        id,
      },
      data: updateData,
    });
  }

  /* =========================================================
     Update Logo
  ========================================================= */

  async updateLogo(id, logo) {
    return await prisma.setting.update({
      where: {
        id,
      },
      data: {
        logo,
      },
    });
  }

  /* =========================================================
     Update Favicon
  ========================================================= */

  async updateFavicon(id, favicon) {
    return await prisma.setting.update({
      where: {
        id,
      },
      data: {
        favicon,
      },
    });
  }

  /* =========================================================
     Clear Logo
  ========================================================= */

  async clearLogo(id) {
    return await prisma.setting.update({
      where: {
        id,
      },
      data: {
        logo: null,
      },
    });
  }

  /* =========================================================
     Clear Favicon
  ========================================================= */

  async clearFavicon(id) {
    return await prisma.setting.update({
      where: {
        id,
      },
      data: {
        favicon: null,
      },
    });
  }
}

export default new SettingsRepository();
