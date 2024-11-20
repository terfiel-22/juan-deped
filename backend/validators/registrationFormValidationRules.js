import { body } from "express-validator";

export const registrationFormValidationRules = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("role").notEmpty().withMessage("Role is required"),
  body("role")
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["Student", "Alumnus"])
    .withMessage("Registration Type must be either Student or Alumnus"),
];
