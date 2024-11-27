import Personnel from "../models/personnel.model.js";

export const fetchPersonnels = async (req, res, next) => {
  try {
    const personnels = await Personnel.find().select([
      "_id",
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
    ]);
    res.status(200).json(personnels);
  } catch (error) {
    next(error);
  }
};
