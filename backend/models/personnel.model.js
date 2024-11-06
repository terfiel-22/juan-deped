import { model, Schema, Types } from "mongoose";

const personnelSchema = new Schema(
  {
    accountId: { type: Types.ObjectId, ref: "Account" },
    basicInformation: {
      empNo: { type: String, default: "" },
      account: { type: String, default: "" },
      lName: { type: String, default: "" },
      fName: { type: String, default: "" },
      mName: { type: String, default: "" },
      civilStatus: { type: String, default: "" },
      position: { type: String, default: "" },
      eligibility: { type: String, default: "" },
      birthdate: { type: Date },
      age: { type: Number, default: 0 },
      bloodType: { type: String, default: "" },
      yrsOfTeachingPrivate: { type: Number, default: 0 },
      tin: { type: String, default: "" },
      gsisId: { type: String, default: "" },
      hdmfId: { type: String, default: "" },
      phicId: { type: String, default: "" },
      contactNo: { type: String, default: "" },
      depedEmail: { type: String, default: "" },
      permAddress: { type: String, default: "" },
      resAddress: { type: String, default: "" },
      prcIdNo: { type: String, default: "" },
      validityDate: { type: Date },
      emergencyContact: { type: String, default: "" },
      relationship: { type: String, default: "" },
      phoneNo: { type: String, default: "" },
    },
    employment: {
      plantilla: { type: String, default: "" },
      origApt: { type: Date },
      grade: { type: String, default: "" },
      track: { type: String, default: "" },
      subject: { type: String, default: "" },
      loyaltyCounter: { type: String, default: "" },
      lastAward: { type: Date },
      lastProm: { type: Date },
      lastStep: { type: Date },
      stepCounter: { type: String, default: "" },
      salaryGrade: { type: Number, default: 0 },
      step: { type: String, default: "" },
      basicSalary: { type: Number, default: 0 },
    },
    educationalAttainment: {
      bachelor: {
        batch: { type: String, default: "" },
        school: { type: String, default: "" },
        unitsEarned: { type: Number, default: 0 },
      },
      masteral: {
        batch: { type: String, default: "" },
        school: { type: String, default: "" },
        unitsEarned: { type: Number, default: 0 },
      },
      doctoral: {
        batch: { type: String, default: "" },
        school: { type: String, default: "" },
        unitsEarned: { type: Number, default: 0 },
      },
    },
  },
  { timestamps: true }
);

// Export Personnel Model
const Personnel = model("Personnel", personnelSchema);

export default Personnel;
