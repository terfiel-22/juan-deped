const juanDeped = {
  /** Personnels */
  personnels: [
    {
      username: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      avatar: { type: String, required: true },
      role: {
        type: String,
        required: true,
        enum: [
          "Administrator",
          "School Head",
          "Assistant Principal",
          "Registrar",
          "Admissions",
          "Subject Teacher",
          "Class Adviser",
        ],
      },
    },
  ],
  personnelDetails: [
    {
      personnelId: { type: Types.ObjectId, ref: "Personnel" },
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
  ],
  personnelEmployments: [
    {
      personnelId: { type: Types.ObjectId, ref: "Personnel" },
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
  ],
  personnelEducations: [
    {
      personnelId: { type: Types.ObjectId, ref: "Personnel" },
      bachelorBatch: { type: String, default: "" },
      bachelorSchool: { type: String, default: "" },
      bachelorUnitsEarned: { type: Number, default: 0 },
      masteralBatch: { type: String, default: "" },
      masteralSchool: { type: String, default: "" },
      masteralUnitsEarned: { type: Number, default: 0 },
      doctorateBatch: { type: String, default: "" },
      doctorateSchool: { type: String, default: "" },
      doctorateUnitsEarned: { type: Number, default: 0 },
    },
  ],

  /** Learners */
  learners: [
    {
      lrn: { type: String, unique: true, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      avatar: { type: String, required: true },
      role: {
        type: String,
        required: true,
        enum: ["Student", "Alumni", "Parent"],
      },
    },
  ],
  learnerEnhancedBeefs: [
    {
      learnerId: { type: Types.ObjectId, ref: "Learner", required: true },
      email: { type: String, required: true, unique: true },
      mobile: { type: String, required: true },
      schoolYear: { type: String, required: true },
      gradeLevelToEnroll: { type: Number, required: true, enum: [11, 12] },
      withLRN: { type: Boolean, default: true },

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
      sex: { type: String, required: true, enum: ["Male", "Female"] },
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
          return this.isSameAsCurrentAddress
            ? this.currentMunicipalityCity
            : "";
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

      // Parent or Guardians
      fatherName: { type: String, required: true },
      fatherContactNumber: { type: String, required: true },
      fatherEmail: { type: String, required: true },
      motherName: { type: String, required: true },
      motherContactNumber: { type: String, required: true },
      motherEmail: { type: String, required: true },
      guardianName: { type: String, required: true },
      guardianContactNumber: { type: String, required: true },
      guardianEmail: { type: String, required: true },

      // Applying for
      shsSemester: { type: String, enum: ["1st Sem", "2nd Sem"] },
      track: { type: String, required: true },
      strand: { type: String, required: true },

      // For returnee
      isReturnee: { type: Boolean, default: false },

      // For ncPasser
      isNcPasser: { type: Boolean, default: false },
    },
  ],
  learnerReturnees: [
    {
      learnerId: { type: Types.ObjectId, ref: "Learner", required: true },
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
  ],
  learnerPreferredDistanceLearningModalities: [
    {
      learnerId: { type: Types.ObjectId, ref: "Learner", required: true },
      isModularPrint: { type: Boolean, default: false },
      isOnline: { type: Boolean, default: false },
      isRadioBased: { type: Boolean, default: false },
      isBlended: { type: Boolean, default: false },
      isModularDigital: { type: Boolean, default: false },
      isEducationTV: { type: Boolean, default: false },
      isHomeschooling: { type: Boolean, default: false },
      isFaceToFace: { type: Boolean, default: false },
    },
  ],
  learnerNcPassers: [
    {
      learnerId: { type: Types.ObjectId, ref: "Learner", required: true },
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
  ],
  learnerShsEligibility: [
    {
      learnerId: { type: Types.ObjectId, ref: "Learner", required: true },
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
  ],
  learnerAdditionalInfo: [
    {
      learnerId: { type: Types.ObjectId, ref: "Learner", required: true },
      weightKg: Number,
      heightM: Number,
      bMI: Number,
    },
  ],

  /** School Forms */
  schools: [
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
  ],
  shsfOnes: [
    {
      schoolId: { type: Types.ObjectId, ref: "School", required: true },
      section: { type: String, required: true },
      gradeLevel: { type: String, required: true },
      course: { type: String },
      track: { type: String, required: true },
      strand: { type: String, required: true },
      students: [shsfOneStudent],
      beginningOfSemMaleCount: Number,
      beginningOfSemFemaleCount: Number,
      beginningOfSemTotalCount: Number,
      endOfSemMaleCount: Number,
      endOfSemFemaleCount: Number,
      endOfSemTotalCount: Number,
      beginningOfSemDate: Date,
      endOfSemDate: Date,
    },
  ],
  shsfOneStudents: [
    {
      learnerId: { type: Types.ObjectId, ref: "Learner", required: true },
      lrn: { type: String, unique: true, required: true },
      fullName: { type: String, required: true },
      sex: { type: String, required: true, enum: ["M", "F"] },
      birthdate: { type: Date, required: true },
      age: { type: Number, required: true },
      religion: { type: String, required: true },
      currentHouseNoAndStreetName: { type: String, required: true },
      currentBarangay: { type: String, required: true },
      currentMunicipalityCity: { type: String, required: true },
      currentProvince: { type: String, required: true },
      fatherFullName: { type: String, required: true },
      motherFullName: { type: String, required: true },
      guardianFullName: String,
      parentGuardianContactNumber: String,
      remarks: String,
    },
  ],

  tracks: [
    {
      _id: "",
      name: "",
      strands: [],
    },
  ],
  strands: [
    {
      _id: "",
      name: "",
      specializations: [],
    },
  ],
  specializations: [
    {
      _id: "",
      name: "",
    },
  ],
};
