import Personnel from "../models/personnel.model.js";

export const fetchPersonnels = async (req, res, next) => {
  try {
    const personnels = await Personnel.find().populate("authId").exec();
    res.status(200).json(personnels);
  } catch (error) {
    next(error);
  }
};
