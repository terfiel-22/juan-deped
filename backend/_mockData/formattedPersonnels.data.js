import fs from "fs";

const rawData = fs.readFileSync("backend/_mockData/json/personnels.data.json");
const personnels = JSON.parse(rawData);

const isValidDate = (dateString) => {
  const date = parseDate(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

const parseDate = (dateString) => {
  if (!dateString || typeof dateString !== "string") return null;

  // Regular expression to match MM/DD/YYYY format
  const dateParts = dateString.split("/");
  if (dateParts.length === 3) {
    const [month, day, year] = dateParts.map((part) => parseInt(part, 10));
    return new Date(year, month - 1, day); // Note: Month is 0-indexed in JS Date
  }

  // If not in MM/DD/YYYY format, attempt standard parsing
  const parsedDate = new Date(dateString);
  return isNaN(parsedDate.getTime()) ? null : parsedDate;
};

const formattedPersonnels = personnels.map((person) => ({
  empNo: person["EMPNO"] || "",
  account: person["ACCOUNT"] || "",
  lName: person["LNAME"] || "",
  fName: person["FNAME"] || "",
  mName: person["MNAME"] || "",
  civilStatus: person["CIV STAT"] || "",
  position: person["POSITION"] || "",
  eligibility: person["ELIGIBILITY"] || "",
  birthdate: isValidDate(person["BIRTHDATE"])
    ? parseDate(person["BIRTHDATE"])
    : null,
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
  validityDate: isValidDate(person["Date of Validity"])
    ? parseDate(person["Date of Validity"])
    : null,
  emergencyContact: person["Emergency Contact"] || "",
  relationship: person["Relationship"] || "",
  phoneNo: person["Phone Number"] || "",

  employment: {
    plantilla: person["PLANTILLA"] || "",
    origApt: isValidDate(person["ORIG APT"])
      ? parseDate(person["ORIG APT"])
      : null,
    grade: person["GRADE"] || "",
    track: person["TRACK"] || "",
    subject: person["SUBJECT"] || "",
    loyaltyCounter: person["LOYALTY COUNTER"] || "",
    lastAward: isValidDate(person["LAST AWARD"])
      ? parseDate(person["LAST AWARD"])
      : null,
    lastProm: isValidDate(person["LAST PROM"])
      ? parseDate(person["LAST PROM"])
      : null,
    lastStep: isValidDate(person["LAST STEP"])
      ? parseDate(person["LAST STEP"])
      : null,
    stepCounter: person["STEP COUNTER"] || "",
    salaryGrade: person["SG"] ? parseInt(person["SG"], 10) : 0,
    step: person["STEP"] ? parseInt(person["STEP"], 10) : 0,
    basicSalary:
      typeof person["BASIC"] === "string"
        ? parseFloat(person["BASIC"].replace(/,/g, "")) || 0
        : typeof person["BASIC"] === "number"
        ? person["BASIC"]
        : 0,
  },
  educationalAttainment: {
    bachelor: {
      batch: person["BATCH"] || "",
      school: person["SCHOOL"] || "",
      unitsEarned: person["UNITS EARNED (IF NOT GRADUATED)"]
        ? parseInt(person["UNITS EARNED (IF NOT GRADUATED)"], 10) || 0
        : 0,
    },
    masteral: {
      batch: person["BATCH3"] || "",
      school: person["SCHOOL4"] || "",
      unitsEarned: person["UNITS EARNED (IF NOT GRADUATED)5"]
        ? parseInt(person["UNITS EARNED (IF NOT GRADUATED)5"], 10) || 0
        : 0,
    },
    doctoral: {
      batch: person["BATCH6"] || "",
      school: person["SCHOOL (BATCH)"] || "",
      unitsEarned: person["UNITS EARNED (IF NOT GRADUATED)5"]
        ? parseInt(person["UNITS EARNED (IF NOT GRADUATED)5"], 10) || 0
        : 0,
    },
  },
}));

export default formattedPersonnels;
