import { model, Schema, Types } from "mongoose";

const studentSchema = Schema(
  {
    accountId: { type: Types.ObjectId, ref: "Account", required: true },
    schoolYear: { type: String, required: true },
    gradeLevelToEnroll: { type: String, required: true },

    learnerInformation: {
      psaBirthCertificateNo: { type: String },
      learnerReferenceNo: { type: String, unique: true },
      lastName: { type: String, required: true },
      birthDate: { type: Date, required: true },
      placeOfBirth: {
        municipalityCity: { type: String, required: true },
      },
      firstName: { type: String, required: true },
      motherTongue: { type: String },
      age: { type: Number },
      weightKg: { type: Number },
      heightM: { type: Number },
      middleName: { type: String },
      extensionName: { type: String },
      email: { type: String },
    },

    currentAddress: {
      houseNoStreet: { type: String },
      streetName: { type: String },
      barangay: { type: String },
      municipalityCity: { type: String },
      province: { type: String },
      country: { type: String },
      zipCode: { type: String },
    },

    permanentAddress: {
      isSameAsCurrent: { type: Boolean, default: false },
      houseNoStreet: { type: String },
      streetName: { type: String },
      barangay: { type: String },
      municipalityCity: { type: String },
      province: { type: String },
      zipCode: { type: String },
    },

    parentsOrGuardians: {
      father: {
        lastName: { type: String },
        firstName: { type: String },
        middleName: { type: String },
        contactNumber: { type: String },
        email: { type: String },
      },
      mother: {
        lastName: { type: String },
        firstName: { type: String },
        middleName: { type: String },
        contactNumber: { type: String },
        email: { type: String },
      },
      guardian: {
        lastName: { type: String },
        firstName: { type: String },
        middleName: { type: String },
        contactNumber: { type: String },
        email: { type: String },
      },
    },

    returningLearner: {
      lastGradeLevelCompleted: { type: String },
      lastSchoolYearCompleted: { type: String },
      lastSchoolAttended: { type: String },
      schoolID: { type: String },
    },

    seniorHighSchool: {
      semester: { type: String, enum: ["1st Sem", "2nd Sem"] },
    },

    ncPasser: {
      certificateNo: { type: String },
      specialization: { type: String },
      validUntil: { type: Date },
    },

    shsEligibility: {
      hsCompleter: {
        genAve: { type: String },
        graduationDate: { type: String },
        schoolAddress: { type: String },
      },
      jhsCompleter: {
        genAve: { type: String },
        graduationDate: { type: String },
        schoolAddress: { type: String },
      },
      peptPasser: {
        examDate: { type: String },
        learningCenterName: { type: String },
        learningCenterAddress: { type: String },
      },
      alsPasser: {
        examDate: { type: String },
        learningCenterName: { type: String },
        learningCenterAddress: { type: String },
      },
      others: {
        examType: { type: String },
        examDate: { type: String },
        learningCenterName: { type: String },
        learningCenterAddress: { type: String },
      },
    },
  },
  { timestamps: true }
);

// Export Student Model
const Student = model("Student", studentSchema);

export default Student;
