import { body } from "express-validator";

export const enhancedBeefValidationRules = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("mobile").notEmpty().withMessage("Mobile is required"),
  body("schoolYear").notEmpty().withMessage("School Year is required"),
  body("gradeLevelToEnroll")
    .notEmpty()
    .withMessage("Grade Level is required")
    .isIn([11, 12])
    .withMessage("Grade Level must be 11 or 12"),
  body("withLRN").isBoolean().withMessage("withLRN must be a boolean"),
  body("isReturnee").isBoolean().withMessage("isReturnee must be a boolean"),
  body("isPsaAvailable")
    .isBoolean()
    .withMessage("isPsaAvailable must be a boolean"),
  body("psaBirthCertificateNo").custom((value, { req }) => {
    if (req.body.isPsaAvailable && (!value || value.trim() === "")) {
      throw new Error(
        "PSA Birth Certificate Number is required when PSA is available"
      );
    }
    return true;
  }),
  body("lrn").custom((value, { req }) => {
    if (req.body.withLRN && (!value || value.trim() === "")) {
      throw new Error(
        "Learner Reference Number is required when withLRN is true"
      );
    }
    return true;
  }),
  body("lastName").notEmpty().withMessage("Last Name is required"),
  body("firstName").notEmpty().withMessage("First Name is required"),
  body("middleName").notEmpty().withMessage("Middle Name is required"),
  body("birthDate")
    .notEmpty()
    .withMessage("Birth Date is required")
    .isISO8601()
    .withMessage("Invalid date format"),
  body("sex")
    .notEmpty()
    .withMessage("Sex is required")
    .isIn(["Male", "Female"])
    .withMessage("Sex must be either male or female"),
  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isInt({ gt: 0 })
    .withMessage("Age must be a positive integer"),
  body("placeOfBirth").notEmpty().withMessage("Place of Birth is required"),
  body("motherTongue").notEmpty().withMessage("Mother Tongue is required"),
  body("isIndigenousPeople")
    .isBoolean()
    .withMessage("isIndigenousPeople must be a boolean"),
  body("indigenousPeople").custom((value, { req }) => {
    if (req.body.isIndigenousPeople && (!value || value.trim() === "")) {
      throw new Error(
        "Indigenous People field is required when isIndigenousPeople is true"
      );
    }
    return true;
  }),
  body("isFourPsBeneficiary")
    .isBoolean()
    .withMessage("isFourPsBeneficiary must be a boolean"),
  body("fourPsHouseHoldId").custom((value, { req }) => {
    if (req.body.isFourPsBeneficiary && (!value || value.trim() === "")) {
      throw new Error(
        "4Ps Household ID is required when isFourPsBeneficiary is true"
      );
    }
    return true;
  }),
  body("currentHouseNoStreet")
    .notEmpty()
    .withMessage("Current House No. and Street is required"),
  body("currentStreetName")
    .notEmpty()
    .withMessage("Current Street Name is required"),
  body("currentBarangay")
    .notEmpty()
    .withMessage("Current Barangay is required"),
  body("currentMunicipalityCity")
    .notEmpty()
    .withMessage("Municipality/City is required"),
  body("currentProvince")
    .notEmpty()
    .withMessage("Current Province is required"),
  body("currentCountry").notEmpty().withMessage("Current Country is required"),
  body("currentZipCode").notEmpty().withMessage("Current Zip Code is required"),
  body("houseNoStreet").custom((value, { req }) => {
    if (!req.body.isSameAsCurrentAddress && (!value || value.trim() === "")) {
      throw new Error("Permanent House No. and Street is required");
    }
    return true;
  }),
  body("streetName").custom((value, { req }) => {
    if (!req.body.isSameAsCurrentAddress && (!value || value.trim() === "")) {
      throw new Error("Permanent Street Name is required");
    }
    return true;
  }),
  body("barangay").custom((value, { req }) => {
    if (!req.body.isSameAsCurrentAddress && (!value || value.trim() === "")) {
      throw new Error("Permanent Barangay is required");
    }
    return true;
  }),
  body("municipalityCity").custom((value, { req }) => {
    if (!req.body.isSameAsCurrentAddress && (!value || value.trim() === "")) {
      throw new Error("Permanent Municipality/City is required");
    }
    return true;
  }),
  body("province").custom((value, { req }) => {
    if (!req.body.isSameAsCurrentAddress && (!value || value.trim() === "")) {
      throw new Error("Permanent Province is required");
    }
    return true;
  }),
  body("country").custom((value, { req }) => {
    if (!req.body.isSameAsCurrentAddress && (!value || value.trim() === "")) {
      throw new Error("Permanent Country is required");
    }
    return true;
  }),
  body("zipCode").custom((value, { req }) => {
    if (!req.body.isSameAsCurrentAddress && (!value || value.trim() === "")) {
      throw new Error("Permanent Zip Code is required");
    }
    return true;
  }),
  body("father")
    .notEmpty()
    .withMessage("Father details are required")
    .isObject()
    .withMessage("Father must be an object"),
  body("father.lastName")
    .notEmpty()
    .withMessage("Father's Last Name is required"),
  body("father.firstName")
    .notEmpty()
    .withMessage("Father's First Name is required"),
  body("father.middleName")
    .notEmpty()
    .withMessage("Father's Middle Name is required"),
  body("father.contactNumber")
    .notEmpty()
    .withMessage("Father's Contact Number is required"),
  body("father.email")
    .notEmpty()
    .withMessage("Father's Email is required")
    .isEmail()
    .withMessage("Invalid email format for Father's Email"),
  body("mother")
    .notEmpty()
    .withMessage("Mother details are required")
    .isObject()
    .withMessage("Mother must be an object"),
  body("mother.lastName")
    .notEmpty()
    .withMessage("Mother's Last Name is required"),
  body("mother.firstName")
    .notEmpty()
    .withMessage("Mother's First Name is required"),
  body("mother.middleName")
    .notEmpty()
    .withMessage("Mother's Middle Name is required"),
  body("mother.contactNumber")
    .notEmpty()
    .withMessage("Mother's Contact Number is required"),
  body("mother.email")
    .notEmpty()
    .withMessage("Mother's Email is required")
    .isEmail()
    .withMessage("Invalid email format for Mother's Email"),
  body("guardian")
    .optional()
    .isObject()
    .withMessage("Guardian must be an object if provided"),
  body("guardian.lastName")
    .optional()
    .notEmpty()
    .withMessage(
      "Guardian's Last Name is required if guardian details are provided"
    ),
  body("guardian.firstName")
    .optional()
    .notEmpty()
    .withMessage(
      "Guardian's First Name is required if guardian details are provided"
    ),
  body("guardian.middleName")
    .optional()
    .notEmpty()
    .withMessage(
      "Guardian's Middle Name is required if guardian details are provided"
    ),
  body("guardian.contactNumber")
    .optional()
    .notEmpty()
    .withMessage(
      "Guardian's Contact Number is required if guardian details are provided"
    ),
  body("guardian.email")
    .optional()
    .notEmpty()
    .withMessage(
      "Guardian's Email is required if guardian details are provided"
    )
    .isEmail()
    .withMessage("Invalid email format for Guardian's Email"),
];
