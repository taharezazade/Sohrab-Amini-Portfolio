/**
 * Replace only the updateImage method in contact.controller.js.
 *
 * The route must use multer before this controller:
 * router.patch("/:id/image", uploadSingle("image", "contact"), contactController.updateImage);
 */

async updateImage(req, res, next) {
  try {
    const { id } = req.params;

    const contact = await contactService.getContactById(id);

    if (!contact?.data) {
      return res.status(contact?.statusCode || 404).json(contact);
    }

    if (!req.file) {
      return res.status(400).json({
        statusCode: 400,
        data: null,
        message: "WEBP image is required.",
      });
    }

    const imagePath = `/uploads/contact/${req.file.filename}`;

    const response = await contactService.updateImage(id, {
      image: imagePath,
    });

    return res.status(response.statusCode).json(response);
  } catch (error) {
    next(error);
  }
}
