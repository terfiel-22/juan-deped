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

// Personnel Schema
const personnelSchema = new Schema(
  {
    first_day: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

// Export Personnel Model
const Personnel = model("Personnel", personnelSchema);

export default Personnel;
