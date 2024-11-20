import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import Auth from "../models/auth.model.js";
import HttpError from "../utils/HttpError.utils.js";
import { profilePic } from "../_mockData/default_data_fields.js";

export const login = async (req, res, next) => {
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
      throw new HttpError("Invalid credentials.", 400);

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic,
      learnerReferenceNo: user.learnerReferenceNo,
      role: user.role,
      isApproved: user.isApproved,
    });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { username, email, password, cpassword, learnerReferenceNo, role } =
      req.body;

    /** Validations */
    if (password !== cpassword)
      throw new HttpError("Password confirmation does not matched.", 400);

    const userByEmail = await Auth.findOne({ email });
    if (userByEmail) throw new HttpError("Email address already exist.", 400);
    const userByLRN = await Auth.findOne({ learnerReferenceNo });
    if (userByLRN)
      throw new HttpError("Learner Reference No. already exist.", 400);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new Auth({
      username,
      email,
      password: hashedPassword,
      profilePic,
      learnerReferenceNo,
      role,
    });

    if (!user) {
      throw new HttpError("Creating new account failed.", 400);
    }

    generateTokenAndSetCookie(user._id, res);
    await user.save();

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic,
      learnerReferenceNo: user.learnerReferenceNo,
      role: user.role,
    });
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

export const fetchAuths = async (req, res, next) => {
  try {
    const auths = await Auth.find({}).select("-password");
    res.status(200).json(auths);
  } catch (error) {
    next(error);
  }
};

export const addAuth = async (req, res, next) => {
  try {
    const { username, email, password, cpassword, role } = req.body;

    /** Validations */
    if (!username || !email || !role)
      throw new HttpError("Fill all required data.", 400);

    if (password !== cpassword)
      throw new HttpError("Password confirmation does not matched.", 400);

    const userByEmail = await Auth.findOne({ email });
    if (userByEmail) throw new HttpError("Email address already exist.", 400);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new Auth({
      username,
      email,
      password: hashedPassword,
      profilePic,
      role,
      isApproved: true,
    });

    if (!user) {
      throw new HttpError("Creating new account failed.", 400);
    }

    generateTokenAndSetCookie(user._id, res);
    await user.save();

    res
      .status(200)
      .json({ message: "Account is successfully added.", result: user });
  } catch (error) {
    next(error);
  }
};

export const editAuth = async (req, res, next) => {
  try {
    const { _id, username, email, password, cpassword, role } = req.body;

    if (!_id | !username | !email | !role)
      throw new HttpError("Fill all required data.", 400);

    const userByEmail = await Auth.findOne({ email });
    if (userByEmail && userByEmail._id.toString() !== _id)
      throw new HttpError("Email address already exist.", 400);

    let values = {
      username,
      email,
      role,
    };

    if (password) {
      if (password !== cpassword)
        throw new HttpError("Password confirmation does not matched.", 400);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      values = {
        ...values,
        password: hashedPassword,
      };
    }

    const updatedAuth = await Auth.findByIdAndUpdate(_id, values, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!updatedAuth) throw new HttpError("User not found.", 404);

    return res.status(200).json({
      message: "Account is successfully updated.",
      result: updatedAuth,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAuth = async (req, res, next) => {
  try {
    const { authId } = req.params;

    const deletedAuth = await Auth.findByIdAndDelete(authId);

    if (!deletedAuth) throw new HttpError("User not found.", 404);

    return res.status(200).json({
      message: "Account is successfully deleted.",
      result: deletedAuth,
    });
  } catch (error) {
    next(error);
  }
};
