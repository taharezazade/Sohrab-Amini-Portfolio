/** @format */

import aboutRepository from "../repositories/about.repository.js";

class AboutService {
  async getAbout() {
    return await aboutRepository.find();
  }

  async createAbout(payload) {
    return await aboutRepository.create(payload);
  }

  async updateAbout(payload) {
    const about = await aboutRepository.find();

    if (!about) {
      throw new Error("About information not found.");
    }

    return await aboutRepository.update(about.id, payload);
  }

  async deleteAbout() {
    const about = await aboutRepository.find();

    if (!about) {
      throw new Error("About information not found.");
    }

    return await aboutRepository.delete(about.id);
  }
}

export default new AboutService();
