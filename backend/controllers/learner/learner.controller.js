import bcrypt from "bcryptjs";
import Learner from "../../models/learner/learner.model.js";
import HttpError from "../../utils/HttpError.utils.js";
import { profilePic } from "../../_mockData/default_data_fields.js";
import generateTokenAndSetCookie from "../../utils/generateTokenAndSetCookie.js";

export const registerLearner = async (req, res, next) => {
  try {
    const { lrn, username, email, password, cpassword, role } = req.body;

    /** Validations */
    if (!username || !email || !password || !cpassword || !role)
      throw new HttpError("Fill all required fields.", 400);

    if (password !== cpassword)
      throw new HttpError("Password confirmation does not matched.", 400);

    const learnerByEmail = await Learner.findOne({ email });
    if (learnerByEmail)
      throw new HttpError("Email address already exist.", 400);
    if (lrn) {
      const userByLRN = await Learner.findOne({ lrn });
      if (userByLRN)
        throw new HttpError("Learner Reference No. already exist.", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newLearner = new Learner({
      lrn,
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (!newLearner) {
      throw new HttpError("Creating new account failed.", 400);
    }

    generateTokenAndSetCookie(newLearner._id, res);
    const savedLearner = await newLearner.save();

    res.status(200).json({
      _id: savedLearner._id,
      username: savedLearner.username,
      email: savedLearner.email,
      profilePic,
      lrn: savedLearner.lrn,
      role: savedLearner.role,
    });
  } catch (error) {
    next(error);
  }
};

export const loginLearner = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userByEmail = await Learner.findOne({ email });
    const userByLRN = await Learner.findOne({ lrn: email });
    const learner = userByEmail ?? userByLRN;

    const isPasswordCorrect = await bcrypt.compare(
      password,
      learner?.password || ""
    );

    if (!learner || !isPasswordCorrect)
      throw new HttpError("Invalid credentials.", 400);

    generateTokenAndSetCookie(learner._id, res);

    res.status(200).json({
      _id: learner._id,
      username: learner.username,
      email: learner.email,
      profilePic,
      lrn: learner.lrn,
      role: learner.role,
    });
  } catch (error) {
    next(error);
  }
};
