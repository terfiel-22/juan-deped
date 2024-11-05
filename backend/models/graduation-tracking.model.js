import { model, Schema } from "mongoose";

const graduationTrackingSchema = new Schema(
  {
    personalInfo: {
      name: { type: String, required: true },
      batchYearGraduated: { type: String, required: true },
      section: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      currentAddress: { type: String },
    },
    immediatePlans: {
      type: String,
      enum: [
        "Enroll in college/university",
        "Start working",
        "Start own business",
        "Taking a gap year/stop for personal reasons",
      ],
      required: true,
    },
    collegePlans: {
      nameOfCollege: { type: String },
      courseOrDegreeProgram: { type: String },
      futurePlans: {
        type: String,
        enum: ["Continue studies", "Transfer to another program", "Other"],
      },
      otherFuturePlans: { type: String }, // For 'Other' option
    },
    workPlans: {
      jobTitle: { type: String },
      companyName: { type: String },
      industry: { type: String },
      jobRelatedToSHSSpecialization: { type: Boolean },
      futurePlans: {
        type: String,
        enum: [
          "Stay in current position",
          "Pursue further studies",
          "Look for another job",
          "Start a business",
          "Other",
        ],
      },
      otherFuturePlans: { type: String }, // For 'Other' option
    },
    businessPlans: {
      businessName: { type: String },
      typeOfBusiness: { type: String },
      currentBusinessStatus: {
        type: String,
        enum: ["Startup", "Growing", "Established"],
      },
      plansForExpansionOrChange: {
        type: String,
        enum: ["Expand", "Sell the business", "Switch industries", "Other"],
      },
      otherPlansForExpansionOrChange: { type: String }, // For 'Other' option
    },
    gapYearPlans: {
      primaryReason: {
        type: String,
        enum: [
          "Financial reasons",
          "Personal reasons",
          "Health concerns",
          "Lack of interest in further studies/work",
          "Other",
        ],
      },
      otherPrimaryReason: { type: String }, // For 'Other' option
      futurePlans: {
        type: String,
        enum: [
          "Return to school",
          "Start working",
          "Start a business",
          "Other",
        ],
      },
      otherFuturePlans: { type: String }, // For 'Other' option
    },
    feedbackOnSchoolPreparation: {
      preparationRating: {
        type: String,
        enum: ["Very well", "Adequately", "Somewhat", "Not at all"],
      },
      suggestionsForImprovement: { type: String },
    },
    contactAndEngagement: {
      participateInAlumniEvents: { type: Boolean, required: true },
    },
  },
  { timestamps: true }
);

const GraduationTracking = model(
  "GraduationTracking",
  graduationTrackingSchema
);

export default GraduationTracking;
