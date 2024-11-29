import PersonnelInformation from "../../models/personnel/personnel-information.model.js";

export const fetchPersonnelInformations = async (req, res, next) => {
  try {
    const personnels = await PersonnelInformation.find().select([
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
