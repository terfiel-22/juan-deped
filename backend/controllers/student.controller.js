import HttpError from "../utils/HttpError.utils.js";
import Student from "../models/student.model.js";

export const studentRegistration = async (req, res, next) => {
  try {
    const authId = "6734774937a62118e7057df9"; // Change after fixing middleware

    // Create the student record.
    const newStudentData = {
      authId,
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
