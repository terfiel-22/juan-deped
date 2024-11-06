import { model, Schema, Types } from "mongoose";

const alumniSchema = new Schema(
  {
    accountId: { type: Types.ObjectId, ref: "Account" },
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
  { timestamps: true }
);

const Alumni = model("Alumni", alumniSchema);

export default Alumni;
