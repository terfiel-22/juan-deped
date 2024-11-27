import { model, Schema } from "mongoose";

const schoolSchema = Schema(
  {
    schoolId: { type: String, required: true },
    schoolName: { type: String, required: true },
    district: { type: String, required: true },
    division: { type: String, required: true },
    region: { type: String, required: true },
    semester: { type: String, required: true },
    beginningOfSemDate: { type: Date, required: true },
    endOfSemDate: { type: Date, required: true },
    schoolYear: { type: String, required: true },
    schoolHead: { type: String, required: true },
    schoolHeadDesignation: { type: String, required: true },
    assistantPrincipal: { type: String, required: true },
    assistantPrincipalDesignation: { type: String, required: true },
  },
  { timestamps: true }
);

// Export Personnel Model
const School = model("School", schoolSchema);

export default School;
