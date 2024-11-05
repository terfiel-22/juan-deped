import { model, Schema } from "mongoose";

const alumniSchema = new Schema(
  {
    personalInformation: {
      learnerReferenceNo: { type: String, unique: true },
      fullName: { type: String, required: true },
      birthDate: { type: Date, required: true },
      age: { type: Number },
      batchYearGraduated: { type: String, required: true },
      section: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
      currentAddress: { type: String },
    },
    currentStatus: {
      status: {
        type: String,
        enum: [
          "Currently enrolled in college/university",
          "Currently working",
          "Started my own business",
          "Decided to take a gap year or stop for personal reasons",
        ],
        required: true,
      },
      enrolledDetails: {
        collegeUniversity: { type: String },
        courseDegreeProgram: { type: String },
        yearLevel: {
          type: String,
          enum: ["Freshman", "Sophomore", "Junior", "Senior"],
        },
        futurePlans: { type: String },
      },
      workingDetails: {
        jobTitle: { type: String },
        companyName: { type: String },
        industry: { type: String },
        isJobRelatedToCourse: { type: Boolean },
        futurePlans: { type: String },
      },
      businessDetails: {
        businessName: { type: String },
        typeOfBusiness: { type: String },
        currentBusinessStatus: {
          type: String,
          enum: ["Startup", "Growing", "Established"],
        },
        plansForExpansion: { type: String },
      },
      stopDetails: {
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
        futurePlans: { type: String },
      },
    },
    feedback: {
      educationPreparation: {
        type: String,
        enum: ["Very well", "Adequately", "Somewhat", "Not at all"],
      },
      suggestionsForImprovement: { type: String },
    },
    engagement: {
      interestedInEvents: { type: Boolean },
    },
  },
  { timestamps: true }
);

const Alumni = model("Alumni", alumniSchema);

module.exports = Alumni;
