import bcrypt from "bcryptjs";
import Auth from "../models/auth.model.js";
import HttpError from "../utils/HttpError.utils.js";
import Student from "../models/student.model.js";

export const studentRegistration = async (req, res, next) => {
  try {
    const {
      email,
      password,
      learnerInformation: { learnerReferenceNo, firstName, lastName },
    } = req.body;

    // Create an authentication
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAuth = new Auth({
      username: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
      learnerReferenceNo,
      role: "Student",
    });

    if (!newAuth) {
      throw new HttpError("Creating new student account failed.", 400);
    }
    await newAuth.save();

    // Create the student record.
    const newStudentData = {
      authId: newAuth._id,
      ...req.body,
    };
    const newStudent = new Student(newStudentData);

    if (!newStudent) {
      throw new HttpError("Creating new student record failed.", 400);
    }
    await newStudent.save();

    res.status(200).json(newStudent);
  } catch (error) {
    next(error);
  }
};
