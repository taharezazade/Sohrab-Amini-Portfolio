/**
 * Replace the image route in contact.routes.js with:
 *
 * router.patch(
 *   "/:id/image",
 *   uploadSingle("image", "contact"),
 *   contactController.updateImage,
 * );
 *
 * Import the middleware according to your existing project:
 *
 * import { uploadSingle } from "../middlewares/upload.middleware.js";
 */
