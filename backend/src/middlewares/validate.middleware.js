/** @format */

import { ZodError } from "zod";

const validateMiddleware = (schema) => {
  return async (req, res, next) => {
    try {
      const validatedData = await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      req.validatedData = validatedData;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(422).json({
          success: false,
          message: "اطلاعات ارسال شده معتبر نیست.",
          errors: error.errors,
        });
      }

      next(error);
    }
  };
};

export default validateMiddleware;
