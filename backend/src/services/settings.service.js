/** @format */

import SettingsRepository from "../repositories/settings.repository.js";

class SettingsService {
  constructor() {
    this.settingsRepository = new SettingsRepository();
  }

  /* ============================
      Create Settings
  ============================ */

  async createSettings(data) {
    const { siteName, description, email, phone, address, socialLinks, seo } =
      data;

    if (!siteName) {
      throw new Error("Site name is required");
    }

    const settingsData = {
      siteName,
      description: description || null,
      email: email || null,
      phone: phone || null,
      address: address || null,

      socialLinks: socialLinks || {},

      seo: seo || {},
    };

    const existingSettings = await this.settingsRepository.findOne();

    if (existingSettings) {
      throw new Error("Settings already exist");
    }

    return await this.settingsRepository.create(settingsData);
  }

  /* ============================
      Get Settings
  ============================ */

  async getSettings() {
    const settings = await this.settingsRepository.findOne();

    if (!settings) {
      throw new Error("Settings not found");
    }

    return settings;
  }

  /* ============================
      Update Settings
  ============================ */

  async updateSettings(data) {
    const settings = await this.settingsRepository.findOne();

    if (!settings) {
      throw new Error("Settings not found");
    }

    const updateData = {
      ...(data.siteName && {
        siteName: data.siteName,
      }),

      ...(data.description !== undefined && {
        description: data.description,
      }),

      ...(data.email !== undefined && {
        email: data.email,
      }),

      ...(data.phone !== undefined && {
        phone: data.phone,
      }),

      ...(data.address !== undefined && {
        address: data.address,
      }),

      ...(data.socialLinks && {
        socialLinks: data.socialLinks,
      }),

      ...(data.seo && {
        seo: data.seo,
      }),
    };

    return await this.settingsRepository.update(settings.id, updateData);
  }

  /* ============================
      Update SEO Settings
  ============================ */

  async updateSEO(data) {
    const settings = await this.settingsRepository.findOne();

    if (!settings) {
      throw new Error("Settings not found");
    }

    return await this.settingsRepository.update(settings.id, {
      seo: {
        ...(settings.seo || {}),
        ...data,
      },
    });
  }

  /* ============================
      Update Social Links
  ============================ */

  async updateSocialLinks(data) {
    const settings = await this.settingsRepository.findOne();

    if (!settings) {
      throw new Error("Settings not found");
    }

    return await this.settingsRepository.update(settings.id, {
      socialLinks: {
        ...(settings.socialLinks || {}),
        ...data,
      },
    });
  }

  /* ============================
      Delete Settings
  ============================ */

  async deleteSettings() {
    const settings = await this.settingsRepository.findOne();

    if (!settings) {
      throw new Error("Settings not found");
    }

    return await this.settingsRepository.delete(settings.id);
  }
}

export default new SettingsService();
