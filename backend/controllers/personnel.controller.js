import Personnel from "../models/personnel.model.js";

export const fetchPersonnels = async (req, res, next) => {
  try {
    const personnels = await Personnel.find().select([
      "empNo",
      "account",
      "lName",
      "fName",
      "mName",
      "civilStatus",
      "position",
      "eligibility",
      "birthdate",
      "age",
      "bloodType",
      "yrsOfTeachingPrivate",
      "-_id",
    ]);
    res.status(200).json(personnels);
  } catch (error) {
    next(error);
  }
};
