import fs from "fs";

const rawData = fs.readFileSync("backend/_mockData/json/personnels.data.json");
const personnels = JSON.parse(rawData);

const formattedPersonnels = personnels.map((person) => ({
  basicInformation: {
    empNo: person["EMPNO"] || "",
    account: person["ACCOUNT"] || "",
    lName: person["LNAME"] || "",
    fName: person["FNAME"] || "",
    mName: person["MNAME"] || "",
    civilStatus: person["CIV STAT"] || "",
    position: person["POSITION"] || "",
    eligibility: person["ELIGIBILITY"] || "",
    birthdate: person["BIRTHDATE"] ? new Date(person["BIRTHDATE"]) : null,
    age: person["AGE"] ? parseInt(person["AGE"], 10) : 0,
    bloodType: person["Blood Type"] || "",
    yrsOfTeachingPrivate: person["YEARS OF TEACHING PRIVATE"]
      ? parseFloat(person["YEARS OF TEACHING PRIVATE"])
      : 0,
    tin: person["TIN"] || "",
    gsisId: person["GSIS_ID"] || "",
    hdmfId: person["HDMF_ID"] || "",
    phicId: person["PHIC_ID"] || "",
    contactNo: person["CONTACT #"] || "",
    depedEmail: person["DEPED EMAIL/PERSONAL EMAIL"] || "",
    permAddress: person["PERMANENT ADDRESS"] || "",
    resAddress: person["RESIDENTIAL ADDRESS"] || "",
    prcIdNo: person["PRC ID No."] || "",
    validityDate: person["Date of Validity"]
      ? new Date(person["Date of Validity"])
      : null,
    emergencyContact: person["Emergency Contact"] || "",
    relationship: person["Relationship"] || "",
    phoneNo: person["Phone Number"] || "",
  },
  employment: {
    plantilla: person["PLANTILLA"] || "",
    origApt: person["ORIG APT"] ? new Date(person["ORIG APT"]) : null,
    grade: person["GRADE"] || "",
    track: person["TRACK"] || "",
    subject: person["SUBJECT"] || "",
    loyaltyCounter: person["LOYALTY COUNTER"] || "",
    lastAward: person["LAST AWARD"] ? new Date(person["LAST AWARD"]) : null,
    lastProm: person["LAST PROM"] ? new Date(person["LAST PROM"]) : null,
    lastStep: person["LAST STEP"] ? new Date(person["LAST STEP"]) : null,
    stepCounter: person["STEP COUNTER"] || "",
    salaryGrade: person["SG"] ? parseInt(person["SG"], 10) : 0,
    step: person["STEP"] ? parseInt(person["STEP"], 10) : 0,
    basicSalary:
      typeof person["BASIC"] === "string"
        ? parseFloat(person["BASIC"].replace(/,/g, ""))
        : person["BASIC"] || 0,
  },
  educationalAttainment: {
    bachelor: {
      batch: person["BATCH"] || "",
      school: person["SCHOOL"] || "",
      unitsEarned: person["UNITS EARNED (IF NOT GRADUATED)"]
        ? parseInt(person["UNITS EARNED (IF NOT GRADUATED)"], 10)
        : 0,
    },
    masteral: {
      batch: person["BATCH3"] || "",
      school: person["SCHOOL4"] || "",
      unitsEarned: person["UNITS EARNED (IF NOT GRADUATED)5"]
        ? parseInt(person["UNITS EARNED (IF NOT GRADUATED)5"], 10)
        : 0,
    },
    doctoral: {
      batch: person["BATCH6"] || "",
      school: person["SCHOOL (BATCH)"] || "",
      unitsEarned: person["UNITS EARNED (IF NOT GRADUATED)5"]
        ? parseInt(person["UNITS EARNED (IF NOT GRADUATED)5"], 10)
        : 0,
    },
  },
}));

export default () => console.log(formattedPersonnels);
