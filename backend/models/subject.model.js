import { model, Schema } from "mongoose";

const coreSubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  writtenWork: {
    type: Number,
    default: 0.25,
  },
  performanceTask: {
    type: Number,
    default: 0.5,
  },
  quarterlyAssessment: {
    type: Number,
    default: 0.25,
  },
});

const appliedSubjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  writtenWork: {
    type: Number,
    default: 0.25,
  },
  performanceTask: {
    type: Number,
    default: 0.45,
  },
  quarterlyAssessment: {
    type: Number,
    default: 0.3,
  },
});

const specializedSchema = new Schema({
  strand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  areas: [
    {
      type: String,
      index: true,
    },
  ],
  writtenWork: {
    type: Number,
    default: 0.2,
  },
  performanceTask: {
    type: Number,
    default: 0.6,
  },
  quarterlyAssessment: {
    type: Number,
    default: 0.2,
  },
});

export const CoreSubject = model("Core Subject", coreSubjectSchema);
export const AppliedSubject = model("Applied Subject", appliedSubjectSchema);
export const SpecializedSubject = model(
  "Specialized Subject",
  specializedSchema
);
