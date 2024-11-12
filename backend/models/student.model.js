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

    learnerInformation: {
      isPsaAvailable: { type: Boolean, default: true },
      psaBirthCertificateNo: {
        type: String,
        required: function () {
          return this.learnerInformation.isPsaAvailable;
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
          return this.learnerInformation.isIndigenousPeople;
        },
      },
      isFourPsBeneficiary: { type: Boolean, default: false },
      fourPsHouseHoldId: {
        type: String,
        required: function () {
          return this.learnerInformation.isFourPsBenificiary;
        },
      },
    },

    currentAddress: {
      houseNoStreet: { type: String, required: true },
      streetName: { type: String, required: true },
      barangay: { type: String, required: true },
      municipalityCity: { type: String, required: true },
      province: { type: String, required: true },
      country: { type: String, required: true },
      zipCode: { type: String, required: true },
    },

    permanentAddress: {
      isSameAsCurrent: { type: Boolean, default: false },
      houseNoStreet: {
        type: String,
        required: function () {
          return !this.permanentAddress.isSameAsCurrent;
        },
      },
      streetName: {
        type: String,
        required: function () {
          return !this.permanentAddress.isSameAsCurrent;
        },
      },
      barangay: {
        type: String,
        required: function () {
          return !this.permanentAddress.isSameAsCurrent;
        },
      },
      municipalityCity: {
        type: String,
        required: function () {
          return !this.permanentAddress.isSameAsCurrent;
        },
      },
      province: {
        type: String,
        required: function () {
          return !this.permanentAddress.isSameAsCurrent;
        },
      },
      country: {
        type: String,
        required: function () {
          return !this.permanentAddress.isSameAsCurrent;
        },
      },
      zipCode: {
        type: String,
        required: function () {
          return !this.permanentAddress.isSameAsCurrent;
        },
      },
    },

    parentsOrGuardians: {
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
      trackStrand: { type: String, required: true },
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
      hsCompleter: {
        isHsCompleter: { type: Boolean, default: false },
        genAve: {
          type: String,
          required: function () {
            return this.shsEligibility.hsCompleter.isHsCompleter;
          },
        },
        graduationDate: {
          type: String,
          required: function () {
            return this.shsEligibility.hsCompleter.isHsCompleter;
          },
        },
        schoolAddress: {
          type: String,
          required: function () {
            return this.shsEligibility.hsCompleter.isHsCompleter;
          },
        },
      },
      jhsCompleter: {
        isJhsCompleter: { type: Boolean, default: false },
        genAve: {
          type: String,
          required: function () {
            return this.shsEligibility.jhsCompleter.isJhsCompleter;
          },
        },
        graduationDate: {
          type: String,
          required: function () {
            return this.shsEligibility.jhsCompleter.isJhsCompleter;
          },
        },
        schoolAddress: {
          type: String,
          required: function () {
            return this.shsEligibility.jhsCompleter.isJhsCompleter;
          },
        },
      },
      peptPasser: {
        isPeptPasser: { type: Boolean, default: false },
        examDate: {
          type: String,
          required: function () {
            return this.shsEligibility.peptPasser.isPeptPasser;
          },
        },
        learningCenterName: {
          type: String,
          required: function () {
            return this.shsEligibility.peptPasser.isPeptPasser;
          },
        },
        learningCenterAddress: {
          type: String,
          required: function () {
            return this.shsEligibility.peptPasser.isPeptPasser;
          },
        },
      },
      alsPasser: {
        isAlsPasser: { type: Boolean, default: false },
        examDate: {
          type: String,
          required: function () {
            return this.shsEligibility.alsPasser.isAlsPasser;
          },
        },
        learningCenterName: {
          type: String,
          required: function () {
            return this.shsEligibility.alsPasser.isAlsPasser;
          },
        },
        learningCenterAddress: {
          type: String,
          required: function () {
            return this.shsEligibility.alsPasser.isAlsPasser;
          },
        },
      },
      others: {
        isOtherExamPasser: { type: Boolean, default: false },
        examType: {
          type: String,
          required: function () {
            return this.shsEligibility.others.isOtherExamPasser;
          },
        },
        examDate: {
          type: String,
          required: function () {
            return this.shsEligibility.others.isOtherExamPasser;
          },
        },
        learningCenterName: {
          type: String,
          required: function () {
            return this.shsEligibility.others.isOtherExamPasser;
          },
        },
        learningCenterAddress: {
          type: String,
          required: function () {
            return this.shsEligibility.others.isOtherExamPasser;
          },
        },
      },
    },

    additional: {
      weightKg: Number,
      heightM: Number,
    },

    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export Student Model
const Student = model("Student", studentSchema);

export default Student;
