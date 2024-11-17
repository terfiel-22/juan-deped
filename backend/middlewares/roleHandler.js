import jwt from "jsonwebtoken";
import HttpError from "../utils/HttpError.utils.js";
import { config } from "dotenv";
import Auth from "../models/auth.model.js";
import merge from "lodash/merge.js";
config();

const { JWT_SECRET_KEY } = process.env;

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) throw new HttpError("Unauthorized - No Token Provided", 401);

    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    if (!decoded) throw new HttpError("Unauthorized - Invalid Token", 401);

    const user = await Auth.findById(decoded.userId).select("-password");
    if (!user) throw new HttpError("User not found", 404);

    merge(req, { user });

    next();
  } catch (error) {
    next(error);
  }
};