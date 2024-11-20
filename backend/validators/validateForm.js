import { validationResult } from "express-validator";
import HttpError from "../utils/HttpError.utils.js";

export const validateForm = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError(
      "Validation failed. Check your inputs.",
      400,
      errors.array()
    );
  }
  next();
};
