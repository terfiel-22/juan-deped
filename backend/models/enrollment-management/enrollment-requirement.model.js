import { model, Schema } from "mongoose";
import { ENROLLMENT_REQUIREMENT_FOR_ENUM } from "../../constants/EnrollmentRequirementFor.js";

const enrollmentRequirement = Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    requirementFor: {
      type: String,
      required: true,
      enum: ENROLLMENT_REQUIREMENT_FOR_ENUM,
    },
    submissionDeadline: { type: Date, required: true },
  },
  { timestamps: true }
);

const EnrollmentRequirement = model(
  "Enrollment Requirement",
  enrollmentRequirement
);

export default EnrollmentRequirement;
