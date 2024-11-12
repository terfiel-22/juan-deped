import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import Auth from "../models/auth.model.js";
import HttpError from "../utils/HttpError.utils.js";

export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect)
      throw new HttpError("Invalid username or password.", 400);

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

export const studentLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userByEmail = await Auth.findOne({ email });
    const userByLRN = await Auth.findOne({ learnerReferenceNo: email });
    const user = userByEmail ?? userByLRN;

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect)
      throw new HttpError("Invalid email/lrn or password.", 400);

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      learnerReferenceNo: user.learnerReferenceNo,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

export const alumniLogin = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Alumni Login route." });
  } catch (error) {
    next(error);
  }
};

export const parentLogin = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Parent Login route." });
  } catch (error) {
    next(error);
  }
};

export const personnelLogin = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Personnel Login route." });
  } catch (error) {
    next(error);
  }
};

export const studentRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Student Register route" });
  } catch (error) {
    next(error);
  }
};

export const alumniRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Alumni Register route." });
  } catch (error) {
    next(error);
  }
};

export const parentRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Parent Register route." });
  } catch (error) {
    next(error);
  }
};

export const personnelRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Personnel Register route." });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    next(error);
  }
};
