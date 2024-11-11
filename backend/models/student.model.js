import { model, Schema, Types } from "mongoose";

const studentSchema = Schema(
  {
    authId: { type: Types.ObjectId, ref: "Auth", required: true },
    schoolYear: { type: String, required: true },
    gradeLevelToEnroll: { type: String, required: true },
    withLRN: { type: Boolean, default: true },
    isReturnee: { type: Boolean, default: false },

    learnerInformation: {
      psaBirthCertificateNo: { type: String },
      learnerReferenceNo: { type: String, unique: true },
      lastName: { type: String, required: true },
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      extensionName: { type: String },
      birthDate: { type: Date, required: true },
      sex: { type: String, required: true, enum: ["male", "female"] },
      age: { type: Number },
      placeOfBirth: { type: String, required: true },
      motherTongue: { type: String },
      indigenousPeople: { type: String },
      fourPsHouseHoldId: { type: String },
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
        additional: {
          email: { type: String },
          mobile: { type: String },
        },
      },
      mother: {
        lastName: { type: String },
        firstName: { type: String },
        middleName: { type: String },
        contactNumber: { type: String },
        additional: {
          email: { type: String },
          mobile: { type: String },
        },
      },
      guardian: {
        lastName: { type: String },
        firstName: { type: String },
        middleName: { type: String },
        contactNumber: { type: String },
        additional: {
          email: { type: String },
          mobile: { type: String },
        },
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
      trackStrand: { type: String },
    },

    preferredDistanceLearningModalities: {
      isModularPrint: { type: Boolean, default: false },
      isOnline: { type: Boolean, default: false },
      isRadioBased: { type: Boolean, default: false },
      isBlended: { type: Boolean, default: false },
      isModularDigital: { type: Boolean, default: false },
      isEducationTV: { type: Boolean, default: false },
      isHomeschooling: { type: Boolean, default: false },
      isFaceToFace: { type: Boolean, default: false },
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

    additional: {
      weightKg: { type: Number },
      heightM: { type: Number },
      email: { type: String },
      mobile: { type: String },
    },
  },
  { timestamps: true }
);

// Export Student Model
const Student = model("Student", studentSchema);

export default Student;
