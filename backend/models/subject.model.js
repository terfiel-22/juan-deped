import { model, Schema } from "mongoose";

// Subject Schema
const subjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  areas: { type: [String], index: true },
});

// Specialized Subject Schema
const specializedSchema = new Schema({
  strand: {
    type: String,
    required: true,
  },
  subjects: { type: [subjectSchema], index: true },
});

const unifiedSubjectSchema = new Schema(
  {
    coreSubjects: { type: [subjectSchema], index: true },
    appliedSubjects: { type: [subjectSchema], index: true },
    specializedSubjects: { type: [specializedSchema], index: true },
  },
  { timestamps: true }
);

// Export Subject Model
const Subject = model("Subject", unifiedSubjectSchema);

export default Subject;
