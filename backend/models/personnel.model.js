import { model, Schema } from "mongoose";
/**
    firstDay -> FIRST DAY IN  ACNTS SHS
    lastDay -> LAST DAY IN ACNTS SHS
    remarks -> Remarks
    divCode -> DIV CODE
    staCode -> STA CODE
    empNo -> EMPNO
    account -> ACCOUNT
    regCode -> REG CODE
    fullName -> NAME
    lname -> LNAME
    fname -> FNAME
    mname -> MNAME
    mInitial -> MI
    suffix -> SUFFIX
    civStatus -> CIV STAT
    gender -> GENDER
    sex -> SEX
    position -> POSITION
    position2 -> POSITION2
    eligibitily -> ELIGIBILITY
    emplyment -> EMPLOYMENT
    plantilla -> PLANTILLA
    natureOfAppointment -> NATURE OF APPOINTMENT
    grade -> GRADE
    track -> TRACK
    subject -> SUBJECT
    loyaltyDate -> LOYALTY DATE (START)
    origAPT -> ORIG APT
    loyaltyCounter -> LOYALTY COUNTER
    lastAward -> LAST AWARD
    lastProm -> LAST PROM
    lastStep -> LAST STEP
    stepCounter -> STEP COUNTER
    sg -> SG
    step => STEP
    basic -> BASIC
    pera -> PERA
    birthdate -> BIRTHDATE
    age -> AGE
    tin -> TIN
    gsisId -> GSIS_ID
    hdmfId -> HDMF_ID
    phicId -> PHIC_ID
    contactNo -> CONTACT #
    email -> DEPED EMAIL/PERSONAL EMAIL
    permAddress -> PERMANENT ADDRESS
    resAddress -> RESIDENTIAL ADDRESS
    highestEducAttainment -> HIGHEST EDUCATIONAL ATTAINMENT
    major -> MAJOR ACCORDING TO THE APPOINTMENT
    bachelorsDegree -> BACHELOR'S DEGREE
    batch -> BATCH
    school -> SCHOOL
    masteral -> MASTERAL
    unitsEarned -> UNITS EARNED (IF NOT GRADUATED)
    batch3 -> BATCH3
    school4 -> SCHOOL4
    doctoral -> DOCTORAL
    unitsEarned5 -> UNITS EARNED (IF NOT GRADUATED)5
    batch6 -> BATCH6
    schoolBatch -> SCHOOL (BATCH)
    prcIdNo -> PRC ID No.
    validityDate -> Date of Validity
    emergencyContact -> Emergency Contact
    relationship -> Relationship
    phoneNo -> Phone Number
    bloodType -> Blood Type
    yrsOfTeachingPrivate -> YEARS OF TEACHING PRIVATE
    status -> Status
 */

const personnelSchema = new Schema(
  {
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
