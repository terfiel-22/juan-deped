import jwt from "jsonwebtoken";
import HttpError from "../utils/HttpError.utils.js";
import { config } from "dotenv";
import merge from "lodash/merge.js";
import get from "lodash/get.js";
import { USER_ROLES } from "../constants/UserRoles.js";
import Learner from "../models/learner/learner.model.js";
import Personnel from "../models/personnel/personnel.model.js";

config();

const { JWT_SECRET_KEY } = process.env;

export const isAdmin = async (req, res, next) => {
  try {
    const user = get(req, "user");
    if (!user)
      throw new HttpError("Unauthorized - User is not authenticated.", 401);
    if (user.role != USER_ROLES.ADMINISTRATOR)
      throw new HttpError("Unauthorized - User is not an admin.", 401);

    next();
  } catch (error) {
    next(error);
  }
};

export const isLearner = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) throw new HttpError("Unauthorized - No Token Provided.", 401);

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    if (!decoded) throw new HttpError("Unauthorized - Invalid Token.", 401);

    const user = await Learner.findById(decoded.userId).select("-password");
    if (!user)
      throw new HttpError("Unauthorized - Learner account not found.", 404);

    merge(req, { user });

    next();
  } catch (error) {
    next(error);
  }
};

export const isPersonnel = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) throw new HttpError("Unauthorized - No Token Provided.", 401);

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    if (!decoded) throw new HttpError("Unauthorized - Invalid Token.", 401);

    const user = await Personnel.findById(decoded.userId).select("-password");
    if (!user)
      throw new HttpError("Unauthorized - Personnel account not found.", 404);

    merge(req, { user });

    next();
  } catch (error) {
    next(error);
  }
};
