/** @format */

import aboutRepository from "../repositories/about.repository.js";

import {
  DEFAULT_ABOUT,
  updateAboutSchema,
} from "../validations/about.validation.js";

class AboutService {
  /* =========================================================
     GET ABOUT
  ========================================================= */

  async get() {
    let about = await aboutRepository.find();

    /*
     * About باید همیشه یک رکورد داشته باشد.
     * اگر وجود نداشت، Backend آن را initialize می‌کند.
     */

    if (!about) {
      about = await aboutRepository.create({
        ...DEFAULT_ABOUT,
      });
    }

    return about;
  }

  /* =========================================================
     UPDATE ABOUT
  ========================================================= */

  async update(data) {
    /*
     * Validate incoming data
     */

    const validatedData = updateAboutSchema.parse(data);

    /*
     * Find singleton About record
     */

    let about = await aboutRepository.find();

    /*
     * اگر به هر دلیلی رکورد وجود نداشت،
     * آن را initialize می‌کنیم.
     */

    if (!about) {
      about = await aboutRepository.create({
        ...DEFAULT_ABOUT,
        ...validatedData,
      });

      return about;
    }

    /*
     * Update existing record
     */

    return aboutRepository.update(about.id, validatedData);
  }
}

export default new AboutService();
