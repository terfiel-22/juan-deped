import { model, Schema, Types } from "mongoose";

const studentSchema = Schema(
  {
    authId: { type: Types.ObjectId, ref: "Auth", required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    schoolYear: { type: String, required: true },
    gradeLevelToEnroll: { type: Number, required: true, enum: ["11", "12"] },
    withLRN: { type: Boolean, default: true },
    isReturnee: { type: Boolean, default: false },

    // Learner Information
    isPsaAvailable: { type: Boolean, default: true },
    psaBirthCertificateNo: {
      type: String,
      required: function () {
        return this.isPsaAvailable;
      },
    },
    learnerReferenceNo: {
      type: String,
      unique: true,
      required: function () {
        return this.withLRN;
      },
    },
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    extensionName: String,
    birthDate: { type: Date, required: true },
    sex: { type: String, required: true, enum: ["male", "female"] },
    age: { type: Number, required: true },
    placeOfBirth: { type: String, required: true },
    motherTongue: { type: String, required: true },
    isIndigenousPeople: { type: Boolean, default: false },
    indigenousPeople: {
      type: String,
      required: function () {
        return this.isIndigenousPeople;
      },
    },
    isFourPsBeneficiary: { type: Boolean, default: false },
    fourPsHouseHoldId: {
      type: String,
      required: function () {
        return this.isFourPsBenificiary;
      },
    },

    // Current Address
    currentHouseNoStreet: { type: String, required: true },
    currentStreetName: { type: String, required: true },
    currentBarangay: { type: String, required: true },
    currentMunicipalityCity: { type: String, required: true },
    currentProvince: { type: String, required: true },
    currentCountry: { type: String, required: true },
    currentZipCode: { type: String, required: true },

    // Permanent Address
    isSameAsCurrentAddress: { type: Boolean, default: false },
    houseNoStreet: {
      type: String,
      default: function () {
        return this.isSameAsCurrentAddress ? this.currentHouseNoStreet : "";
      },
    },
    streetName: {
      type: String,
      default: function () {
        return this.isSameAsCurrentAddress ? this.currentStreetName : "";
      },
    },
    barangay: {
      type: String,
      default: function () {
        return this.isSameAsCurrentAddress ? this.currentBarangay : "";
      },
    },
    municipalityCity: {
      type: String,
      default: function () {
        return this.isSameAsCurrentAddress ? this.currentMunicipalityCity : "";
      },
    },
    province: {
      type: String,
      default: function () {
        return this.isSameAsCurrentAddress ? this.currentProvince : "";
      },
    },
    country: {
      type: String,
      default: function () {
        return this.isSameAsCurrentAddress ? this.currentCountry : "";
      },
    },
    zipCode: {
      type: String,
      default: function () {
        return this.isSameAsCurrentAddress ? this.currentZipCode : "";
      },
    },

    // Parents or Guardians
    father: {
      lastName: { type: String, required: true },
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      contactNumber: { type: String, required: true },
      email: { type: String, required: true },
    },
    mother: {
      lastName: { type: String, required: true },
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      contactNumber: { type: String, required: true },
      email: { type: String, required: true },
    },
    guardian: {
      lastName: { type: String, required: true },
      firstName: { type: String, required: true },
      middleName: { type: String, required: true },
      contactNumber: { type: String, required: true },
      email: { type: String, required: true },
    },

    returningLearner: {
      lastGradeLevelCompleted: {
        type: String,
        required: function () {
          return this.isReturnee;
        },
      },
      lastSchoolYearCompleted: {
        type: String,
        required: function () {
          return this.isReturnee;
        },
      },
      lastSchoolAttended: {
        type: String,
        required: function () {
          return this.isReturnee;
        },
      },
      schoolID: {
        type: String,
        required: function () {
          return this.isReturnee;
        },
      },
    },

    seniorHighSchool: {
      semester: { type: String, enum: ["1st Sem", "2nd Sem"] },
      track: { type: String, required: true },
      strand: { type: String, required: true },
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
      isNcPasser: { type: Boolean, default: false },
      certificateNo: {
        type: String,
        required: function () {
          return this.ncPasser.isNcPasser;
        },
      },
      specialization: {
        type: String,
        required: function () {
          return this.ncPasser.isNcPasser;
        },
      },
      validUntil: {
        type: Date,
        required: function () {
          return this.ncPasser.isNcPasser;
        },
      },
    },

    shsEligibility: {
      isHsCompleter: { type: Boolean, default: false },
      hsGenAve: {
        type: String,
        required: function () {
          return this.shsEligibility.isHsCompleter;
        },
      },
      isJhsCompleter: { type: Boolean, default: false },
      jhsGenAve: {
        type: String,
        required: function () {
          return this.shsEligibility.isJhsCompleter;
        },
      },
      graduationDate: Date,
      schoolName: String,
      schoolAddress: String,

      isPeptPasser: { type: Boolean, default: false },
      peptRating: {
        type: String,
        required: function () {
          return this.shsEligibility.isPeptPasser;
        },
      },
      isAlsPasser: { type: Boolean, default: false },
      alsRating: {
        type: String,
        required: function () {
          return this.shsEligibility.isAlsPasser;
        },
      },
      isOtherExamPasser: { type: Boolean, default: false },
      otherExam: {
        type: String,
        required: function () {
          return this.shsEligibility.isOtherExamPasser;
        },
      },
      examDate: Date,
      learningCenterName: String,
      learningCenterAddress: String,
    },

    // Additional
    weightKg: Number,
    heightM: Number,
  },
  { timestamps: true }
);

// Export Student Model
const Student = model("Student", studentSchema);

export default Student;
